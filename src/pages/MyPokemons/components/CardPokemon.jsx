import React, { useContext } from 'react';
import { MyPokemonsContext } from '../context';

export const CardPokemon = ({ pokemonData }) => {
    const { handleDeletePokemon } = useContext(MyPokemonsContext);
    return (
        <div className='w-3/12 px-4 mb-5'>
            <div className='w-100 bg-slate-100 rounded-lg flex flex-col items-center cursor-pointer'>
                <div className='w-full bg-red-600 rounded-t-lg flex flex-col items-center py-4'>
                    <div className='bg-slate-100 w-24 h-24 rounded-full bg-center' style={{ backgroundImage: `url(${pokemonData?.sprite})` }}></div>
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
                <button
                    onClick={() => {
                        handleDeletePokemon(pokemonData.id);
                    }}
                    className='w-full py-2 bg-red-700 font-semibold text-slate-100 hover:bg-red-600	'>
                    Delete pokemon
                </button>
            </div>
        </div>
    );
};
