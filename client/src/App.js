import React, { useEffect } from 'react';
import { Container, } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import PostDetails from './components/PostDetails/PostDetails';


const RedirectToPosts = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/posts');
    }, [navigate]);

    return null;
};
const AuthRoute = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
  
    return user ? <RedirectToPosts /> : <Auth />;
  };


const App = () => {
    return (
        <GoogleOAuthProvider clientId="888558021729-nscp23u9fd9ab2krnjvm4oa6d8dgsg4p.apps.googleusercontent.com">
            <Router>
                <Container maxWidth='xl'>
                    <NavBar />
                    <Routes>
                        <Route path="/" exact element={<RedirectToPosts />} />
                        <Route path="/posts" exact element={<Home />} />
                        <Route path="/posts/search" exact element={<Home />} />
                        <Route path="/posts/:id" element={<PostDetails />} />
                        <Route path="/Auth" exact element={<AuthRoute/>} />
                    </Routes>
                </Container>
            </ Router>
        </GoogleOAuthProvider>
    )
}
export default App;
