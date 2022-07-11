import React from 'react';
import { MyPokemonsProvider } from './context';
import { LayoutMyPokemons } from './layout';

export const MyPokemons = () => {
    return (
        <MyPokemonsProvider>
            <LayoutMyPokemons />;
        </MyPokemonsProvider>
    );
};
