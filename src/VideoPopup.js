import React from 'react';
import './VideoPopup.css';

const VideoPopup = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="video-popup-overlay" onClick={onClose}>
            <div className="video-popup-info">
                <div className="TitlePopUp">FreeJack Online</div>
                <div className="InfoPopUp">Info text</div>
                <div className="CheckOutPopUp">
                    <div className="CheckOutButtonPopUp">Check Out</div>
                </div>
            </div>
            <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
                <iframe width="1050" height="635" frameborder="0" scrolling="no"
                    src={videoSrc}
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;