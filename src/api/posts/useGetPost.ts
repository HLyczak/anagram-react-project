import { useEffect, useState } from "react";
import { Post, getPost } from "./requests";

export function useGetPost(postId: string) {
  const [post, setPost] = useState<Post>();

  function useGetUserData() {
    getPost(postId).then((data) => setPost(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(useGetUserData, []);

  return post;
}
