import React from 'react'
import './Card.css'
const Card = () => {
    return (
        <div className='card-outer'>
            <div className="card-inner">
                <div className="circles-container">
                    <div className="circle-right">
                        <div className=" circle circle-one"></div>
                        <div className="circle circle-two"></div>
                    </div>
                    <div className="circle-left">
                        <div className="circle circle-three"></div>
                        <div className="circle circle-four"></div>
                    </div>
                </div>

                <div className='title'><p>AI Horoscope</p>
                    <span className='logo'></span>
                </div>

                <div className="chat-box">
                    <div className="ai-chat">
                        <p>Welcome to AI studio! How can I help you today?</p>
                    </div>
                    <div className="user-chat">
                        <p>Hey AstroBot, can you tell me about my horoscope today?</p>
                    </div>
                    <div className="ai-chat">
                        <p>Sure! What is your zodiac sign?</p>
                    </div>
                    <div className="user-chat">
                        <p>I’m Leo!</p>
                    </div>
                    <div className="ai-chat">
                        <p>As a Leo, today you will find yourself at the center <br /> of attention. Embrace it!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
