import React from "react";
import { useGetPosts } from "../../api/posts/useGetPosts";
import "./Home.css";
import { Card } from "../common/Card";
import { useGetPost } from "../../api/posts/useGetPost";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const post = useGetPost(id || "");
  //na poczatku nie ma postow dopiero sie laduja
  if (!post) {
    return <div>loading ...</div>;
  }
  /// ...post rozpakowuje nam posta post.body
  return (
    <div className="post">
      <Card
        description={post.body}
        title={post.title}
        image={post.url}
        userId={post.userId}
        postId={post.id}
      />
    </div>
  );
}
