import { useEffect, useState } from "react";
import { Photos, getPhotos } from "./request";

export function useGetPhotos() {
  const [photos, setPhotos] = useState<Photos[]>();

  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getPhotos().then((data) => setPhotos(data));
  }, []);

  return photos;
}
