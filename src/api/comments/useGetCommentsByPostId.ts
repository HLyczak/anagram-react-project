import { useEffect, useState } from "react";
import { Comments, getCommentsbyPostId } from "./requests";

export function useGetCommentsByPostId(postId: string) {
  const [comments, setComments] = useState<Comments[]>();

  function getCommentsByPostIdData() {
    getCommentsbyPostId(postId).then((data) => setComments(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getCommentsByPostIdData, []);

  return comments;
}
