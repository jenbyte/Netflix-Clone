import React from 'react';
import './Banner.css';

function Banner(props) {
    return (
        <header className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">Movie Title</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>

                <h1 className="banner-description">This is a test description</h1>
            </div>
        </header>
    );
}

export default Banner;
