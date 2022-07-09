import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const CardPokemon = ({ pokemonUrlData }) => {
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function getDataPokemon() {
            const pokemonCardData = await axios.get(`${pokemonUrlData}`);
            if (pokemonCardData && pokemonCardData.data) {
                setPokemonData({
                    id: pokemonCardData.data.id,
                    name: pokemonCardData.data.name,
                    attack: pokemonCardData.data.stats[1].base_stat,
                    life: pokemonCardData.data.stats[0].base_stat,
                    defense: pokemonCardData.data.stats[2].base_stat,
                    sprite: pokemonCardData?.data.sprites.front_default,
                });
            }
        }
        getDataPokemon();
    }, [pokemonUrlData]);

    return (
        <div className='w-3/12 px-4 mb-5'>
            <Link to={`/pokemon/details/${pokemonData.id}`}>
                <div className='w-100 bg-slate-100 rounded-lg flex flex-col items-center cursor-pointer'>
                    <div className='w-full bg-red-600 rounded-t-lg flex flex-col items-center py-4'>
                        <div
                            className='bg-slate-100 w-24 h-24 rounded-full bg-center'
                            style={{ backgroundImage: `url(${pokemonData?.sprite})` }}></div>
                    </div>
                    <div className='bg-zinc-600 w-3/4 p-1 font-semibold text-center my-3 rounded-lg text-slate-100'>{pokemonData.name}</div>
                    <div className='w-full flex flex-row justify-around text-center mb-3'>
                        <div className='w-1/4'>
                            <h3 className='mb-2 uppercase border-b-2 border-orange-500'>Attack</h3>
                            <span className='font-semibold'>{pokemonData.attack}</span>
                        </div>
                        <div className='w-1/4'>
                            <h3 className='mb-2 uppercase border-b-2 border-orange-500'>Defense</h3>
                            <span className='font-semibold'>{pokemonData.defense}</span>
                        </div>
                        <div className='w-1/4'>
                            <h3 className='mb-2 uppercase border-b-2 border-orange-500'>Life</h3>
                            <span className='font-semibold'>{pokemonData.life}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
