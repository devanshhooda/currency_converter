import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const _backgroundImageUrl = 'https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const [fromBoxSelectedCurrency, setFromBoxCurrency] = useState("usd");
  const [fromBoxAmount, setFromBoxAmount] = useState(0);

  const [toBoxSelectedCurrency, setToBoxCurrency] = useState("inr");
  const [toBoxAmount, setToBoxAmount] = useState(0);

  const currencyData = useCurrencyInfo(fromBoxSelectedCurrency);

  const currenciesList = Object.keys(currencyData);

  const convertCurrency = () => {
    setToBoxAmount(fromBoxAmount * currencyData[toBoxSelectedCurrency]);
  }

  const swap = () => {
    setFromBoxAmount(toBoxAmount);
    setToBoxAmount(fromBoxAmount);

    setFromBoxCurrency(toBoxSelectedCurrency);
    setToBoxCurrency(fromBoxSelectedCurrency);
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${_backgroundImageUrl}')`
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                convertCurrency();
              }}
            >
              <div className="w-full mb-1">
                {/* from INPUT box */}
                <InputBox
                  inputLabel='From'
                  selectedCurrency={fromBoxSelectedCurrency}
                  amount={fromBoxAmount}
                  currencyOptionsList={currenciesList}
                  onCurrencyChange={(currency) => setFromBoxCurrency(currency)}
                  onAmountChange={(amount) => setFromBoxAmount(amount)} />
              </div>

              <div className="relative w-full h-0.5">
                {/* Swap button */}
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>

              <div className="w-full mt-1 mb-4">
                {/* to INPUT box */}
                <InputBox
                  inputLabel='To'
                  selectedCurrency={toBoxSelectedCurrency}
                  amount={toBoxAmount}
                  currencyOptionsList={currenciesList}
                  disabled={true}
                  onCurrencyChange={(currency) => setToBoxCurrency(currency)}
                  onAmountChange={(amount) => setToBoxAmount(amount)} />
              </div>

              {/* Convert button */}
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert from {fromBoxSelectedCurrency.toUpperCase()} to {toBoxSelectedCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
