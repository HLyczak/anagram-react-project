import React from "react";
import { useGetPosts } from "../../api/posts/useGetPosts";
import "./Home.css";
import { PostCard } from "../common/PostCard";

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
        <PostCard {...post} key={post.id} />
      ))}
    </div>
  );
}
