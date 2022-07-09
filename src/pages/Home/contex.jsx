import React, { useEffect, useState } from 'react';

import axios from 'axios';

const HomeContext = React.createContext(false);
const { Provider, Consumer } = HomeContext;

const HomeProvider = ({ children }) => {
    const [apiData, setApiData] = useState([]);

    const getTenPokemons = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${Math.floor(Math.random() * 1000)}`);
        console.log(response);
        if (response && response.data && response.data.results && Array.isArray(response.data.results)) {
            setApiData(response.data.results);
        }
    };

    useEffect(() => {
        getTenPokemons();

        return () => {};
    }, []);

    return <Provider value={{ apiData }}>{children}</Provider>
};

export { HomeProvider, Consumer, HomeContext };
