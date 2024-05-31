import React, { useEffect, useState } from "react";
import { Comment } from "./../components/Recipe/RecipeList";
import IconMultiplier from "./IconMultiplier";

interface CommentsProps {
  comments: Comment[];
}

const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = String(date.getUTCFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};

const CommentCard = ({ comments }: CommentsProps) => {
  return (
    <div className="comments">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <strong>{comment.name}</strong>
          <p>{formatDate(comment.createdAt.toString())}</p>
          <p>{comment.review}</p>
          <IconMultiplier amount={comment.rating} icon="/review-star.svg" />
        </div>
      ))}
    </div>
  );
};

export default CommentCard;
