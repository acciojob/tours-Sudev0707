import React, { useState } from 'react';
import '../styles/App.css'



function Tour({ id, name, info, image, price, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    const toggleReadMore = () => {
        setReadMore(!readMore);
    };
    return (
        <>
            <div className="tour-card">
                <div className="tour-image-container">
                    <img src={image} alt={name} className="tour-image" />
                </div>
                <div className="tour-content">
                    <div className="tour-header">
                        <h2 className="tour-name">{name}</h2>
                        <span className="tour-price">${price}</span>
                    </div>
                    <div className="tour-description">
                        <p>
                            {readMore ? info : `${info.substring(0, 200)}`}
                            {info.length > 200 && (
                                <button onClick={toggleReadMore} className="read-more-btn">
                                    {readMore ? ' Show Less' : ' ...Show More'}
                                </button>
                            )}
                        </p>
                    </div>
                    <button onClick={() => removeTour(id)} className="remove-btn">
                        Not Interested
                    </button>
                </div>
            </div>
        </>
    )
}