import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const apiEndPoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    
    useEffect(() => {
        fetch(apiEndPoint)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

    }, [currency])

    return data;
}

export default useCurrencyInfo;