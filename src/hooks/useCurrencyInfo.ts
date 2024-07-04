import { useEffect, useState } from "react";

let currencyInfoURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';

const useCurrencyInfo = (currency: string) => {
    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        fetch(`${currencyInfoURL}/${currency}.json`)
            .then((res) => res.json())
            .then((resJson) => setCurrencyData(resJson[currency]));
        ;

        console.log(`Updated currencyData: ${currencyData}`)
    }, [currency]);

    return currencyData;
}

export default useCurrencyInfo;
