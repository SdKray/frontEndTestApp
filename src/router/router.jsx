import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { LoginScreen } from '../pages/LoginScreen';
import { PokemonDetail } from '../pages/PokemonDetails';

export const RouterApp = () => {
    return (
        <Routes>
            <Route path='/login' element={ <LoginScreen />}/>
            <Route index element={ <Home />}/>
            <Route path='/pokemon/details/:pokemonID' element={ <PokemonDetail />}/>
            <Route path='*' element={ <Home />}/>
        </Routes>
    );
};
