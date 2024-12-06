import React from 'react';
import VideoPopup from './VideoPopup.js';
import { useState } from 'react';
import './Showcase.css';

const Showcase = ({ title }) => {
    const videoSrc = 'https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer'; // Replace with your video source
    const [isPopupOpen, setPopupOpen] = useState(false);
    const closePopup = () => {
        setPopupOpen(false);
    };
    const openPopup = () => {
        setPopupOpen(true);
    };
    const openInNewTab = (url) => {
        window.open("https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer", "_blank", "noreferrer");
    };
    return (
        <div className="Showcase">
            <div className="ShowcaseHeader">
                <p>{title}</p>
            </div>
            <div className="ShowcaseContent">
                <div className="ShowcaseImage">
                    <iframe className="ShowcaseVideo"
                        src="https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="ShowcaseButtons">
                    <div onClick={openInNewTab} className="CheckOutButton">Check Out</div>
                    <div onClick={openPopup} className="InfoButton">Info</div>
                </div>
            </div>

            <VideoPopup isOpen={isPopupOpen} onClose={closePopup} videoSrc={videoSrc} />
        </div>
    );
};

export default Showcase;