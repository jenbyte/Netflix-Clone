import React, { Component } from 'react';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import './HomeScreen.css';

class HomeScreen extends Component {
    render() {
        return (
            <div className="homeScreen">
				<Nav />
				<Banner />
            </div>
        );
    }
}

export default HomeScreen;