import React from "react";
import { useGetPosts } from "../../api/posts/useGetPosts";

import { Card } from "../common/Card";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  const posts = useGetPosts();
  const navigate = useNavigate();
  //na poczatku nie ma postow dopiero sie laduja
  if (!posts) {
    return <div>loading ...</div>;
  }
  /// ...post rozpakowuje nam posta post.body
  return (
    <div className="posts">
      {posts.map((post) => (
        <Card
          description={post.body}
          title={post.title}
          image={post.url}
          key={post.id}
        >
          <Button size="small" component={Link} to={`/users/${post.userId}`}>
            User
          </Button>
          <Button size="small" component={Link} to={`/posts/${post.id}`}>
            Details
          </Button>
          <Button size="small" component={Link} to={`/comments/${post.id}`}>
            Comments
          </Button>
          <Button
            size="small"
            onClick={async () => {
              await fetch(
                `https://jsonplaceholder.typicode.com/posts/${post.id}`,
                {
                  method: "DELETE",
                }
              );
              toast.success("Success");
              navigate("/");
            }}
          >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
}
