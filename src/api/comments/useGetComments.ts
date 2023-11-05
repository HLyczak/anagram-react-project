import { useEffect, useState } from "react";
import { Comments, getComments } from "./requests";

export function useGetComments() {
  const [comments, setComments] = useState<Comments[]>();

  function getCommentsData() {
    getComments().then((data) => setComments(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getCommentsData, []);

  return comments;
}
