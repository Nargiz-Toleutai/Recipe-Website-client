interface Comment {
  id: number;
  name: string;
  review: string;
  createdAt: Date;
  rating: number;
}

export const calculateAverageRating = (comments: Comment[]): number => {
  if (comments.length === 0) return 0;
  const totalRating = comments.reduce(
    (acc, comment) => acc + comment.rating,
    0
  );
  return totalRating / comments.length;
};
