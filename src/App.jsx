import { RouterApp } from './router/router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <GlobalProvider>
                    <RouterApp />
                    <Toaster position='top-right' />
                </GlobalProvider>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
