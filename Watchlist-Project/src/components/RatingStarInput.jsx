import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'
import "./RatingStarInput.css"

const RatingStarInput = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  return (
    <div>
      <div className="star flex">
       {[...Array(5)].map((star, index) => {
          const currentRating = index + 1
          return (
            <label key={index + 1}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating )}
              />
                <FaStar 
                className="cursor-pointer" 
                size={50} 
                color={currentRating <= (hover || rating) ? "ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
                />
            </label>

          )
       })}
       <div>{rating}</div>
       
      </div>
    </div>
  );
};

export default RatingStarInput;
