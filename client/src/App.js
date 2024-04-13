import React from 'react';
import { Container, } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {
    return (
        <GoogleOAuthProvider clientId="888558021729-nscp23u9fd9ab2krnjvm4oa6d8dgsg4p.apps.googleusercontent.com">
        <Router>
            <Container maxwidth='lg'>
                <NavBar />
                <Routes>
                   <Route path="/" exact element={<Home/>} />
                   <Route path="/Auth" exact element={<Auth/> } />
                </Routes>
            </Container>
        </ Router>
        </GoogleOAuthProvider>
        
       

    )
}
export default App;
