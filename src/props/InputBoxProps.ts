interface InputBoxProps {
    inputLabel: string
    selectedCurrency: string
    amount: number | undefined
    disabled?: boolean
    currencyOptionsList: string[] | []
    onCurrencyChange: (currency: string) => void
    onAmountChange: (amount: number) => void
}

export default InputBoxProps;
