import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router'

export function Currency() {
  // Get matching params on whatever
  // Route caused *us* to be rendered
  //const params = useParams()

  const [currencyDetails, setCurrencyDetails] = useState({})

  const loadCurrencyFromApi = () => {
    const url = `https://api.ratesapi.io/api/latest?base=USD`

    fetch(url)
      .then(response => response.json())
      .then(apiData => setCurrencyDetails(apiData))
    //console.log(apiData)
  }

  loadCurrencyFromApi()

  /*  {
     useEffect(() => {
  setCurrencyValues(), []
  }) 
  } */

  //const rates = [{ 1: 'one' }, { 2: 'two' }, { 3: 'three' }, { 4: 'four' }]
  const rates = [1, 2, 3, 4]
  const listItems = rates.map(rate => <li>{rate * 2}</li>)

  return (
    <>
      <p>Enter an amount (in U.S. Dollars) to convert: </p>

      <form>
        <input
          className="mr-2"
          // onChange={event = showCurrencyRates(event.target.value)}
        />
        <button>Go</button>
      </form>

      <div className="media">
        <div className="media-body">
          <h4 className="mt-0">PRINTING: {currencyDetails.base}</h4>
          This shows: <br />
          <br />
          Base: {currencyDetails.base}
          <br />
          Current Date: {currencyDetails.date}
          <br />
          <br />
          {/* {currencyDetails.rates} */}
          Rates: {rates}
          <br />
          <br />
          Rates x2: {listItems}
        </div>
      </div>
    </>
  )
}
export default Currency
