import { useEffect, useState } from "react";
import { Post, getPost } from "./requests";

export function useGetPost(postId: string) {
  const [post, setPost] = useState<Post>();

  // tablica dla use effect daje nam to ze wywołuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getPost(postId).then((data) => setPost(data));
  }, [postId]);

  return post;
}
