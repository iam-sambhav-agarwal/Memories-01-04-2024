import React from 'react';
import { Container, } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



const App = () => {
    return (
        <Router>
            <Container maxwidth='lg'>
                <NavBar />
                <Routes>
                   <Route path='/' exact component={Home} />
                   <Route path='/auth' exact component={Auth} />
                </Routes>
            </Container>
        </ Router>

    )
}
export default App;
