import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import { useMutation, gql } from '@apollo/client';
import toast from 'react-hot-toast';

const NEW_ACCOUNT = gql`
    mutation newUser($input: userInput) {
        newUser(input: $input) {
            id
            email
            password
        }
    }
`;

const AUTH_USER = gql`
    mutation userAuth($input: AuthInput) {
        userAuth(input: $input) {
            token
            id
            email
        }
    }
`;

const REGISTER_POKEMON = gql`
    mutation registerPokemon($input: pokemonInput) {
        registerPokemon(input: $input) {
            pokemonID
            user
        }
    }
`;

const GlobalContext = React.createContext(false);
const { Provider, Consumer } = GlobalContext;

const GlobalProvider = ({ children }) => {
    const [isUserAuth, setIsUserAuth] = useState(false);
    const [signInValues, handleSignInInputChange] = useForm({ email: '', password: '' });
    const [signUpValues, handleSignUpInputChange] = useForm({ email: '', password: '' });

    const [newUser] = useMutation(NEW_ACCOUNT);
    const [userAuth] = useMutation(AUTH_USER);
    const [registerPokemon] = useMutation(REGISTER_POKEMON);

    let navigate = useNavigate();

    const loginOnSubmit = async event => {
        event.preventDefault();
        if (signInValues.email.length > 0 && signInValues.password.length > 0) {
            try {
                const reposeAtUserAuth = await userAuth({
                    variables: {
                        input: signInValues,
                    },
                });

                console.log(reposeAtUserAuth);

                toast.success('login success');
                // const { token } = reposeAtUserAuth.data.userAuth;
                // localStorage.setItem('auth', token);
                setIsUserAuth({
                    ...reposeAtUserAuth.data.userAuth,
                });
                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            } catch (error) {
                toast.error(error.message);
                console.log(error);
            }
        }
        console.log(signInValues);
    };

    const signUpOnSubmit = async event => {
        event.preventDefault();
        console.log(signUpValues);
        if (signUpValues.email.length > 0 && signUpValues.password.length > 0) {
            const { email, password } = signUpValues;
            try {
                const reposeAtCreateNewUser = await newUser({
                    variables: {
                        input: { email, password },
                    },
                });
                console.log(reposeAtCreateNewUser);
                toast.success('Account has been created');
                setTimeout(() => {
                    console.log('redirect');
                    navigate('/login');
                }, 2000);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
        console.log(signUpValues);
    };

    const LogOut = () => {
        setIsUserAuth(false);
    };

    const toMyPokemons = () => {
        if (isUserAuth) {
            navigate('/list');
        } else {
            toast.error('You are not Authenticated');
        }
    };

    const handleSavePokemon = async id => {
        if (isUserAuth && id) {
            try {
                const reposeAtRegisterPokemon = await registerPokemon({
                    variables: {
                        input: { pokemonID: id, user: isUserAuth.id },
                    },
                });
                toast.success('Success');
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.error('You are not Authenticated');
        }
    };

    return (
        <Provider
            value={{
                signInValues,
                handleSignInInputChange,
                signUpValues,
                handleSignUpInputChange,
                loginOnSubmit,
                signUpOnSubmit,
                isUserAuth,
                setIsUserAuth,
                LogOut,
                toMyPokemons,
                handleSavePokemon,
            }}>
            {children}
        </Provider>
    );
};

export { GlobalProvider, Consumer, GlobalContext };
