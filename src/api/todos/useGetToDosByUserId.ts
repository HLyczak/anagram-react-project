import { useEffect, useState } from "react";

import { ToDos, getToDos } from "./request";

export function useGetToDos(postId: string) {
  const [toDos, setToDos] = useState<ToDos[]>();

  function getToDosData() {
    getToDos(postId).then((data) => setToDos(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getToDosData, []);

  return toDos;
}
