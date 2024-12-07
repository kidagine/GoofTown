import React from 'react';
import VideoPopup from './VideoPopup.js';
import { useState } from 'react';
import './Showcase.css';
import LeftArrow from './images/Arrow.png'
import RightArrow from './images/Arrow.png'


const Showcase = ({ title, data }) => {
    const videoSrc = 'https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer'; // Replace with your video source
    const [isPopupOpen, setPopupOpen] = useState(false);
    const closePopup = () => {
        setPopupOpen(false);
    };
    const openPopup = () => {
        setPopupOpen(true);
    };

    const [style, setStyle] = useState({ display: 'none' });
    const [index, setIndex] = useState(0);

    const getImage = (imageCode) => {
        try {
            return require(`../src/images/${imageCode}.png`);
        } catch (error) {
            console.error(`Image with code ${imageCode} not found.`);
        }
    };
    setTimeout(() => {
        addIndex();
    }, 8000);
    const addIndex = () => {
        if (index + 1 > data.length - 1)
            setIndex(0)
        else
            setIndex(index + 1)
    };
    const decreaseIndex = () => {
        if (index - 1 < 0)
            setIndex(data.length - 1)
        else
            setIndex(index - 1)
    };

    return (
        <div className="Showcase">
            <div className="ShowcaseHeader">
                <p>{title}</p>
                <p>{index + 1}/{data.length}</p>
            </div>
            <div className="ShowcaseContent"
                onMouseEnter={e => {
                    setStyle({ display: 'block' });
                }}
                onMouseLeave={e => {
                    setStyle({ display: 'none' })
                }}>
                <div className="ShowcaseImage">
                    {data.length > 1 &&
                        <img className="ShowcaseButtonLeft" src={LeftArrow} onClick={decreaseIndex} style={style}></img>
                    }
                    {data.length > 1 &&
                        <img className="ShowcaseButtonRight" src={RightArrow} onClick={addIndex} style={style}></img>
                    }
                    <img
                        className="ShowcaseVideo"
                        src={data[index].image}
                        frameborder="0" >
                    </img>
                </div>
                <div className="ShowcaseButtons">
                    <div className="CheckOutButton">{data[index].title}</div>
                    {data[index].noContent &&
                        <div className="InfoButtonDisabled">Info</div>
                    }
                    {!data[index].noContent &&
                        <div onClick={openPopup} className="InfoButton">Info</div>
                    }
                </div>
            </div>

            <VideoPopup isOpen={isPopupOpen} onClose={closePopup} data={data[index]} />
        </div >
    );
};

export default Showcase;