import React from "react";

import { Card } from "../common/Card";
import "./Comments.css";

import { useParams } from "react-router-dom";
import { useGetCommentsByPostId } from "../../api/comments/useGetCommentsByPostId";

export default function CommentsByPostId() {
  const { id } = useParams();
  const comments = useGetCommentsByPostId(id || "");
  //na comentarzy nie ma postow dopiero sie laduja
  if (!comments) {
    return <div>loading ...</div>;
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
