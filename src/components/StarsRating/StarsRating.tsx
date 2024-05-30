import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState<number>(0);
  return (
    <div className="stars-rating">
      <p>{rating}</p>
      <h4>Rating</h4>
      <div className="stars">
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return (
              <>
                <input
                  type="radio"
                  name="star-rating"
                  id={`st${index}`}
                  value={index + 1}
                  onChange={(e) => {
                    setRating(index + 1);
                  }}
                />
                <label htmlFor={`st${index}`}>
                  <FontAwesomeIcon icon="star" />
                </label>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default StarRating;
