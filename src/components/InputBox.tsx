import { useId } from "react";
import InputBoxProps from "../props/InputBoxProps";

const InputBox = (inputBoxProps: InputBoxProps) => {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {inputBoxProps.inputLabel}
                </label>

                {/* Amount textfield */}
                <input
                    id={amountInputId}

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={inputBoxProps.disabled}
                    value={inputBoxProps.amount}
                    onChange={(e) => inputBoxProps.onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency</p>

                {/* Currency dropdown */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={inputBoxProps.selectedCurrency}
                    onChange={(e) => inputBoxProps.onCurrencyChange(e.target.value)}
                >
                    {
                        inputBoxProps.currencyOptionsList.map(
                            (currency) =>
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>)
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
