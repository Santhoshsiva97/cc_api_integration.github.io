import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';
// import App from './app'
import UserProvider from './components/UserProvider';


ReactDOM.render((
    <UserProvider>
        <Router basename="/client">
            <Container />
        </Router>
    </UserProvider>
), document.getElementById('root'));
