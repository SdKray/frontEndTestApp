import React from 'react';
import { PokemonDetailProvider } from './context';
import { LayoutPokemonDetail } from './Layout';

export const PokemonDetail = () => {
    return (
        <PokemonDetailProvider>
            <LayoutPokemonDetail />
        </PokemonDetailProvider>
    );
};
