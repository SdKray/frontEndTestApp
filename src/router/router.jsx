import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { Home } from '../pages/Home';
import { LoginScreen } from '../pages/LoginScreen';
import { MyPokemons } from '../pages/MyPokemons';
import { PokemonDetail } from '../pages/PokemonDetails';
import { RegisterScreen } from '../pages/SignUp';

export const RouterApp = () => {
    const { isUserAuth } = useContext(GlobalContext);
    return (
        <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/signup' element={<RegisterScreen />} />
            <Route index element={<Home />} />
            {isUserAuth ? <Route path='/list' element={<MyPokemons />} /> : <Route path='/list' element={<Navigate to={'/login'} />} />}
            <Route path='/pokemon/details/:pokemonID' element={<PokemonDetail />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
};
