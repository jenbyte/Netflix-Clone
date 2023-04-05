import React, { Component } from 'react';
import Nav from '../components/Nav';
import './HomeScreen.css';

class HomeScreen extends Component {
    render() {
        return (
            <div className="homeScreen">
                <h1>Home Screen</h1>
				<Nav />
            </div>
        );
    }
}

export default HomeScreen;