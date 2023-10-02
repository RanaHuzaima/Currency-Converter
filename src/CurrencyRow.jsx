import React from 'react'

function CurrencyRow(props) {
  const {currencyOption,selectedCurrency,onchanged} = props
  return (
    <div className='currencyrow'>
    <input type="number" />
    <select value={selectedCurrency} onChange={onchanged}>
      {currencyOption.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    </div>
  )
}

export default CurrencyRow

