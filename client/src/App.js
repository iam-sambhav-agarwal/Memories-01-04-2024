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
                   <Route path="/" exact element={<Home/>} />
                   <Route path="/Auth" exact element={<Auth/> } />
                </Routes>
            </Container>
        </ Router>
       

    )
}
export default App;
