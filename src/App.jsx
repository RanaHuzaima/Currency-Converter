import React, { useEffect, useState } from 'react'
import CurrencyRow from './Component/CurrencyRow'
import  './App.css'

const Base_URl = 'https://v6.exchangerate-api.com/v6/7288dc67dc3abe9304365694/latest/usd'

function App() {
  const [] = useState()
  useEffect(()=>{
    fetch(Base_URl)
    .then(res => res.json())
    .then(data => console.log(data));
  },[])

  return (
    <div className='main'>
    <h1>Currency Converter</h1>
      <CurrencyRow/>
      <div className='equal'>=</div>
      <CurrencyRow/>
    </div>
  )
}

export default App
