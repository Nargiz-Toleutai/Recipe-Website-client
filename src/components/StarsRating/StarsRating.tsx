import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = () => {
  return (
    <div className="stars-rating">
      <h4>Rating</h4>
      <div className="stars">
        <input type="radio" id="st1" value="1" />
        <label htmlFor="st1">
          <FontAwesomeIcon icon="star" />
        </label>
        <input type="radio" id="st2" value="2" />
        <label htmlFor="st2">
          <FontAwesomeIcon icon="star" />
        </label>
        <input type="radio" id="st3" value="3" />
        <label htmlFor="st3">
          <FontAwesomeIcon icon="star" />
        </label>
        <input type="radio" id="st4" value="4" />
        <label htmlFor="st4">
          <FontAwesomeIcon icon="star" />
        </label>
        <input type="radio" id="st5" value="5" />
        <label htmlFor="st5">
          <FontAwesomeIcon icon="star" />
        </label>
      </div>
    </div>
  );
};

export default StarRating;
