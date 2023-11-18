import { useEffect, useState } from "react";
import { Comments, getComments } from "./requests";

export function useGetComments() {
  const [comments, setComments] = useState<Comments[]>();

  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=> {
    getComments().then((data) => setComments(data));
  }, []);

  return comments;
}
