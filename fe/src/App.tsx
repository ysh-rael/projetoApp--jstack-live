import React from 'react';

import {GlobalStyles} from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Orders } from './components/Orders';

export function App() {

    // react fragment
    return (
        <React.Fragment>
            <GlobalStyles />
            <Header/>
            <Orders/>
        </React.Fragment>
    );
}