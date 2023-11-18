import React from "react";

import { Card } from "../common/Card";
import "./Comments.css";

import { useParams } from "react-router-dom";
import { useGetCommentsByPostId } from "../../api/comments/useGetCommentsByPostId";
import { CircularProgress } from "@mui/material";

export default function CommentsByPostId() {
  const { id } = useParams();
  const comments = useGetCommentsByPostId(id || "");
  //na comentarzy nie ma postow dopiero sie laduja
  if (!comments) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div className="comments">
      {comments.map((comment) => (
        <Card
          description={comment.body}
          title={comment.name}
          key={comment.id}
        />
      ))}
    </div>
  );
}
