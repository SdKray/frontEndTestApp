import React, { useContext } from 'react';
import { Header } from '../../components/Header';
import { CardPokemon } from './components/CardPokemon';
import { HomeContext } from './contex';

export const LayoutHome = () => {
    const { apiData } = useContext(HomeContext);

    return (
        <>
        <Header />
            <div className='container flex flex-wrap mx-auto mt-5'>
                {apiData?.length > 0 && apiData.map((data, idx) => <CardPokemon key={`pokemonCard${idx}`} pokemonUrlData={data?.url} />)}
            </div>
        </>
    );
};
