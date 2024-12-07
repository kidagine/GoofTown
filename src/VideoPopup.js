import React from 'react';
import './VideoPopup.css';

const VideoPopup = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;
    const openInNewTab = () => {
        window.open(data.url, "_blank", "noreferrer");
    };
    return (
        <div className="video-popup-overlay" onClick={onClose}>
            <div className="video-popup-info" onClick={(e) => e.stopPropagation()}>
                <div className="TitlePopUp">{data.title} <div className="InfoPopUp"><br />{data.description}</div></div>
                <div className="CheckOutPopUp">
                    <div onClick={openInNewTab} className="CheckOutButtonPopUp">Check Out</div>
                </div>
            </div>
            <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
                <iframe width="1050" height="635" frameborder="0" scrolling="no"
                    src={data.video}
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;