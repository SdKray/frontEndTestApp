import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

export const LoginScreen = () => {
    const { signInValues, handleSignInInputChange, loginOnSubmit } = useContext(GlobalContext);
    return (
        <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <div>
                    <img
                        className='mx-auto h-12 w-auto'
                        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
                        alt='Workflow'
                    />
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
                </div>
                <form autoComplete='off' className='mt-8 space-y-6' onSubmit={loginOnSubmit}>
                    <input type='hidden' name='remember' value='true' />
                    <div className='rounded-md shadow-sm -space-y-px'>
                        <div>
                            <label htmlFor='email-address' className='sr-only'>
                                Email address
                            </label>
                            <input
                                name='email'
                                type='email'
                                autoComplete='false'
                                required
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                placeholder='Email'
                                onChange={handleSignInInputChange}
                                value={signInValues?.email}
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='sr-only'>
                                Password
                            </label>
                            <input
                                name='password'
                                type='password'
                                autoComplete='false'
                                required
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                placeholder='Password'
                                onChange={handleSignInInputChange}
                                value={signInValues?.password}
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <div className='text-sm'>
                            <Link to='/signup' className='font-medium text-indigo-600 hover:text-indigo-500'>
                                Create new Account
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                                <svg
                                    className='h-5 w-5 text-rose-700 group-hover:text-rose-400'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'>
                                    <path
                                        fillRule='evenodd'
                                        d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
