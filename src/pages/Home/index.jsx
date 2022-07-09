import React from 'react';
import { HomeProvider } from './contex';
import { LayoutHome } from './Layout';

export const Home = () => {
    return (
        <HomeProvider>
            <LayoutHome />
        </HomeProvider>
    );
};
