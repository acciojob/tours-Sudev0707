import React, { useState } from 'react';

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <div className="tour-price">{price}</div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        Remove
      </button>
    </div>
  );
}

export default Tour;