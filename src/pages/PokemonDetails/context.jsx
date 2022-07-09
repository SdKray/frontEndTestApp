import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetailContext = React.createContext(false);
const { Provider, Consumer } = PokemonDetailContext;

const PokemonDetailProvider = ({ children }) => {
    const { pokemonID } = useParams();
    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);

    const getPokemonDetail = async () => {
        setLoading(true);
        const responsePokeDetail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
        console.log(responsePokeDetail.data)
        if (responsePokeDetail && responsePokeDetail.data) {
            setPokemonData({
                id: responsePokeDetail.data.id,
                name: responsePokeDetail.data.name,
                attack: responsePokeDetail.data.stats[1].base_stat,
                life: responsePokeDetail.data.stats[0].base_stat,
                defense: responsePokeDetail.data.stats[2].base_stat,
                sprite: responsePokeDetail?.data.sprites.front_default,
                types: responsePokeDetail.data.types.map(type=>type.type.name),
                abilities: responsePokeDetail.data.abilities.map(ability=>ability.ability.name)
            });
        }
        setLoading(false);
    };

    useEffect(() => {
        getPokemonDetail();
        return () => {
            setPokemonData({});
        };
    }, []);

    return <Provider value={{ pokemonData, loading }}>{children}</Provider>;
};

export { PokemonDetailProvider, Consumer, PokemonDetailContext };
