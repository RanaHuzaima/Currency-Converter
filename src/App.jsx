import React from 'react'
import CurrencyRow from './Component/CurrencyRow'
import  './App.css'

function App() {
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
