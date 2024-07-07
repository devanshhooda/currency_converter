import { useEffect, useState } from "react";

let currencyInfoURL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

const useCurrencyInfo = (currency: string): Record<string, any> => {
    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        fetch(`${currencyInfoURL}/${currency}.json`)
            .then((res) => res.json())
            .then((resJson: Record<string, any>) => setCurrencyData(resJson[currency]));
        ;

        // console.log(`Updated currencyData: ${currencyData}`)
    }, [currency]);

    return currencyData;
}

export default useCurrencyInfo;
