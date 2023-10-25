import { useEffect, useState } from "react";
import { Post, getPosts } from "./requests";

export function useGetPosts() {
  const [posts, setPosts] = useState<Post[]>();

  function getPostsData() {
    getPosts().then((data) => setPosts(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getPostsData, []);

  return posts;
}
