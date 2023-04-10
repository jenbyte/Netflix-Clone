import React from 'react';
import './Banner.css';
import { PlayArrow, Info } from '@mui/icons-material';


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
                    <button className="banner-button play-btn-wrapper">
                        <PlayArrow className="icon-btn">Filled</PlayArrow>
                        Play
                    </button>
                    <button className="banner-button info-btn-wrapper">
                        <span className="info-btn-content">
                            <Info className="icon-btn"></Info>
                            My List
                        </span>
                    </button>
                </div>

                <h1 className="banner-description">This is a test description</h1>
            </div>

            <div className="">

            </div>
        </header>
    );
}

export default Banner;
