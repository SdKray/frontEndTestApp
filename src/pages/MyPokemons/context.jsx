import React, { useContext, useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { GlobalContext } from '../../context/GlobalContext';
import toast from 'react-hot-toast';

import axios from 'axios';

const MyPokemonsContext = React.createContext(false);
const { Provider, Consumer } = MyPokemonsContext;

const MY_POKEMONS = gql`
    query getMyPokemons($getMyPokemonsId: ID!) {
        getMyPokemons(id: $getMyPokemonsId) {
            pokemonID
        }
    }
`;

const DELETE_POKEMON = gql`
    mutation deletePokemon($input: pokemonInput!) {
        deletePokemon(input: $input)
    }
`;

const MyPokemonsProvider = ({ children }) => {
    const { isUserAuth } = useContext(GlobalContext);
    const [pokemonsList, setPokemonsList] = useState([]);

    const [deletePokemon] = useMutation(DELETE_POKEMON);

    const { data, loading, error } = useQuery(MY_POKEMONS, {
        variables: { getMyPokemonsId: isUserAuth.id },
    });

    const getMyPokemons = async () => {
        let auxdata = [];
        console.log(data);
        if (data && data.getMyPokemons && Array.isArray(data.getMyPokemons)) {
            for (const { pokemonID } of data.getMyPokemons) {
                let responePokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
                auxdata = [
                    ...auxdata,
                    {
                        id: responePokemonData.data.id,
                        name: responePokemonData.data.name,
                        attack: responePokemonData.data.stats[1].base_stat,
                        life: responePokemonData.data.stats[0].base_stat,
                        defense: responePokemonData.data.stats[2].base_stat,
                        sprite: responePokemonData?.data.sprites.front_default,
                    },
                ];
            }
            setPokemonsList(auxdata);
        }
    };

    const handleDeletePokemon = async id => {
        if (id) {
            try {
                const reposeAtDeletePokemon = await deletePokemon({
                    variables: {
                        input: {
                            pokemonID: id,
                            user: isUserAuth.id,
                        },
                    },
                });

                console.log(reposeAtDeletePokemon);

                toast.success('Pokemon Deleted');
            } catch (error) {
                toast.error(error.message);
                console.log(error);
            }
        }
        setPokemonsList(oldData => oldData.filter(current => current.id !== id));
    };

    useEffect(() => {
        getMyPokemons();

        return () => {
            setPokemonsList([]);
        };
    }, [data, loading]);

    return <Provider value={{ pokemonsList, handleDeletePokemon }}>{children}</Provider>;
};

export { MyPokemonsProvider, Consumer, MyPokemonsContext };
