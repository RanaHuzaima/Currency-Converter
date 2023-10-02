import React, { useEffect, useState } from 'react'
import CurrencyRow from './CurrencyRow'
import  './App.css'

const Base_URl = 'https://v6.exchangerate-api.com/v6/7288dc67dc3abe9304365694/latest/usd'

function App() {
  const [currencyOption, setCurrencyOption] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount,setAmount] = useState(1)
  const [amountInFrom,setAmountInFrom] = useState(true)

  let toamount, fromamount
  if(amountInFrom){
    fromamount = amount
    toamount = amount * exchangeRate
  } else{
    toamount = amount
    fromCurrency = amount / exchangeRate
  }

  useEffect(()=>{
    fetch(Base_URl)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.conversion_rates)[112]
      setCurrencyOption([...Object.keys(data.conversion_rates)])
      setFromCurrency(data.base_code)
      setToCurrency(firstCurrency)
      setExchangeRate(data.conversion_rates[firstCurrency])
    })
    .catch("Something went Wrong with api")
  },[])

  function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountInFrom(true)
  }
  function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFrom(false)
  }

  return (
    <div className='main'>
    <h1>Currency Converter</h1>
      <CurrencyRow currencyOption={currencyOption}
      selectedCurrency={fromCurrency}
      onchanged={e => setFromCurrency(e.target.value)}
      onchangeamount={handleFromAmountChange}
      amount={fromamount}
      />
      <div className='equal'>=</div>
      <CurrencyRow currencyOption={currencyOption}
      selectedCurrency={toCurrency}
      onchanged={e => setToCurrency(e.target.value)}
      onchangeamount={handleToAmountChange}
      amount={toamount}
      />
    </div>
  )
}

export default App
