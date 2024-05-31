import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Rating {
  value: number;
  onChange: (e: any) => void;
}

const StarRating = ({ value, onChange }: Rating) => {
  const [hoveredValue, setHoveredValue] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoveredValue(index);
  };

  const handleMouseLeave = () => {
    setHoveredValue(0);
  };

  return (
    <div className="stars-rating">
      <h4>Rating</h4>
      <div className="stars" key={1}>
        {Array(5)
          .fill(0)
          .map((_, index) => {
            const starIndex = index + 1;
            return (
              <div
                key={starIndex}
                className="star-container"
                onMouseEnter={() => handleMouseEnter(starIndex)}
                onMouseLeave={handleMouseLeave}
              >
                <input
                  type="radio"
                  name="star-rating"
                  id={`st${starIndex}`}
                  value={starIndex}
                  onChange={onChange}
                />
                <label
                  htmlFor={`st${starIndex}`}
                  className={`star ${
                    hoveredValue >= starIndex || value >= starIndex
                      ? "filled"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faStar} />
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StarRating;
