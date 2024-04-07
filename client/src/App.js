import React from 'react';
import { Container, } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

import {BrowserRouter , Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth='lg'>
                <NavBar />
                <Switch>
                   <Route path='/' exact component={Home} />
                   <Route path='/auth' exact component={Auth} />
                </Switch>
                <Home />
            </Container>
        </ BrowserRouter>

    )
}
export default App;
