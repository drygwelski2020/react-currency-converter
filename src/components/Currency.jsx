import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export function Currency() {
  // Get matching params on whatever
  // Route caused *us* to be rendered
  const params = useParams()

  const [currencyDetails, setCurrencyDetails] = useState({
    base: undefined,
    rates: [undefined],
    date: undefined,
  })

  const loadCurrencyFromApi = () => {
    const url = `https://api.ratesapi.io/api/latest?base=USD`
    console.log(`Loading from ${url}`)

    fetch(url)
      .then(response => response.json())
      .then(apiData => setCurrencyDetails(apiData))
  }

  //loadCurrencyFromApi()

  //useEffect(() => {
  //  setCurrencyDetails(), [{}]
  //})

  return (
    <>
      <p>Enter an amount (in US Dollars) to convert: </p>

      <input type="text" className="mr-2"></input>

      <form>
        <input />
        <button>Go</button>
      </form>

      <div className="media">
        <div className="media-body">
          <h4 className="mt-0">PRINTING: {currencyDetails.base}</h4>
          This shows: <br />
          {currencyDetails.base}
          {/* {currencyDetails.rates} */}
          <br />
          {currencyDetails.date}
        </div>
      </div>
    </>
  )
}
export default Currency
