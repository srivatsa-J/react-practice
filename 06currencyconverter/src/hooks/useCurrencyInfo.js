// ./hooks/useCurrencyInfo.js
import { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => setData(data.rates))
      .catch((err) => console.error("Failed to fetch currency info", err))
  }, [currency])

  return data
}

export default useCurrencyInfo
