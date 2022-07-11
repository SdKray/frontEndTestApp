import React, { useContext } from 'react';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { CardPokemon } from './components/CardPokemon';
import { MyPokemonsContext } from './context';

export const LayoutMyPokemons = () => {
    const { pokemonsList } = useContext(MyPokemonsContext);
    console.log(pokemonsList);
    return (
        <>
            <Header />
            {(pokemonsList && pokemonsList?.length > 0) ? (
                <div className='container flex flex-wrap mx-auto mt-5'>
                    {pokemonsList.map((currentData, idx) => (
                        <CardPokemon key={`cardMyPokemon${idx}`} pokemonData={currentData} />
                    ))}
                </div>
            ) : (
                <div className='container flex justify-center items-center mx-auto mt-10'>
                    <Loader />
                </div>
            )}
        </>
    );
};
