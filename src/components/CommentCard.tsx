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
      {comments.map((comment) => (
        <div key={comment.id} className="comment-details">
          <strong>{comment.name}</strong>
          <h3>{formatDate(comment.createdAt.toString())}</h3>
          <p>{comment.review}</p>
          <div className="comment-rating">
            <IconMultiplier amount={comment.rating} icon="/review-star.svg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentCard;
