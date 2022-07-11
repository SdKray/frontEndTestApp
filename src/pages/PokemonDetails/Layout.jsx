import React, { useContext } from 'react';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { GlobalContext } from '../../context/GlobalContext';
import { PokemonDetailContext } from './context';

export const LayoutPokemonDetail = () => {
    const {handleSavePokemon} = useContext(GlobalContext)
    const { pokemonData, loading } = useContext(PokemonDetailContext);

    return (
        <>
            <Header />
            {!loading ? (
                <>
                    <div className='container mx-auto my-10'>
                        <div className='w-full mb-5 flex justify-end'>
                            <button 
                            onClick={()=>handleSavePokemon(pokemonData.id)}
                            className='px-4 py-2 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 '>Save</button>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-1/2 bg-red-600 flex justify-center items-center rounded-lg'>
                                <div
                                    className={`w-52 h-52 bg-slate-100 bg-no-repeat bg-cover rounded-full`}
                                    style={{ backgroundImage: `url(${pokemonData.sprite})` }}></div>
                            </div>
                            <div className='w-1/2 text-center pt-4 bg-slate-100'>
                                <h1 className='font-semibold uppercase'>
                                    {pokemonData.name} #{pokemonData.id}
                                </h1>
                                <div className='w-full flex flex-row justify-around mt-3'>
                                    {pokemonData.types.map((type, idx) => (
                                        <div className='rounded-full bg-sky-400 px-6 py-1' key={`typeDetailPokemon${idx}`}>
                                            {type}
                                        </div>
                                    ))}
                                </div>
                                <div className='w-full flex flex-row justify-around text-center my-5'>
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
                                <div className='w-full text-left px-7'>
                                    <h3 className=''>List of abilities:</h3>
                                    <ul className='list-none mb-3'>
                                        {pokemonData.abilities.map((ability, idx) => (
                                            <li key={`abilityList${idx}`}>- {ability}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className='w-full mt-52 flex justify-center items-center'>
                    <Loader />
                </div>
            )}
        </>
    );
};
