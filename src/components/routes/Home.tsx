import React from "react";
import { useGetPosts } from "../../api/posts/useGetPosts";

import { Card } from "../common/Card";

export default function Home() {
  const posts = useGetPosts();
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
          userId={post.userId}
          postId={post.id}
        />
      ))}
    </div>
  );
}
