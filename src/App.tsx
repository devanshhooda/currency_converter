import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [fromBoxSelectedCurrency, setFromBoxCurrency] = useState("usd");
  const [fromBoxAmount, setFromBoxAmount] = useState(0);

  const [toBoxSelectedCurrency, setToBoxCurrency] = useState("inr");
  const [toBoxAmount, setToBoxAmount] = useState(0);

  const currencyData = useCurrencyInfo(fromBoxSelectedCurrency);

  const currenciesList = Object.keys(currencyData);

  return (
    <>
      <h1 className='bg-black text-white text-3xl'>Currency Converter</h1>

      <InputBox
        inputLabel='From'
        selectedCurrency={fromBoxSelectedCurrency}
        amount={fromBoxAmount}
        currencyOptionsList={currenciesList}
        onCurrencyChange={(currency) => setFromBoxCurrency(currency)}
        onAmountChange={(amount) => setFromBoxAmount(amount)} />

      <InputBox
        inputLabel='To'
        selectedCurrency={toBoxSelectedCurrency}
        amount={toBoxAmount}
        currencyOptionsList={currenciesList}
        onCurrencyChange={(currency) => setToBoxCurrency(currency)}
        onAmountChange={(amount) => setToBoxAmount(amount)} />

      <button>
        Click to convert
      </button>
    </>
  )
}

export default App;
