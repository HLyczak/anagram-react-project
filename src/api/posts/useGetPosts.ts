import { useEffect, useState } from "react";
import { Post, getPosts } from "./requests";

export function useGetPosts() {
  const [posts, setPosts] = useState<Post[]>();

  // tablica dla use effect daje nam to ze wywołuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getPosts().then((data) => setPosts(data));
    
  }, []);

  return posts;
}
