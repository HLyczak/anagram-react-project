import { useEffect, useState } from "react";
import { Comments, getCommentsbyPostId } from "./requests";

export function useGetCommentsByPostId(postId: string) {
  const [comments, setComments] = useState<Comments[]>();

  // tablica dla use effect daje nam to ze wywołuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getCommentsbyPostId(postId).then((data) => setComments(data));
  }, [postId]);

  return comments;
}
