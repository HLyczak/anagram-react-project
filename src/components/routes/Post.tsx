import React from "react";
import { useGetPosts } from "../../api/posts/useGetPosts";
import "./Home.css";
import { Card } from "../common/Card";
import { useGetPost } from "../../api/posts/useGetPost";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

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
      <Card description={post.body} title={post.title} image={post.url}>
        <Button size="small" component={Link} to={`/users/${post.userId}`}>
          User
        </Button>
        <Button size="small" component={Link} to={`/comments/${post.id}`}>
          Comments
        </Button>
      </Card>
    </div>
  );
}
