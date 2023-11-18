import { useEffect, useState } from "react";
import { Photos, getPhoto } from "./request";

export function useGetPhoto(id: string) {
  const [photo, setPhoto] = useState<Photos>();

  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getPhoto(id).then((data) => setPhoto(data));
  }, [id]);

  return photo;
}
