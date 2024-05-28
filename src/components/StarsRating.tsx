interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = Array(rating).fill(0);

  return (
    <>
      {stars.map((_, star) => (
        <img key={star} src="/review-star.svg" alt="star" />
      ))}
    </>
  );
};

export default StarRating;
