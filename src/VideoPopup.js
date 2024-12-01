import React from 'react';
import './VideoPopup.css';

const VideoPopup = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="video-popup-overlay" onClick={onClose}>
            <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
                <iframe width="1050" height="650" frameborder="0" scrolling="no" allowfullscreen title="ESG Introduction.mp4"
                    src={videoSrc}
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;