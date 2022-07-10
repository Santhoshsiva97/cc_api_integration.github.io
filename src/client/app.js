import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';
import UserProvider from './components/UserProvider';

export default class App extends React.Component {
    render() {
        <UserProvider>
            <Router basename="/client/home">
                <Container />
            </Router>
        </UserProvider>
    }
}
