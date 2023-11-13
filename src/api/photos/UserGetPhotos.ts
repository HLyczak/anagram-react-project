import { useEffect, useState } from "react";
import { Photos, getPhotos } from "./request";

export function useGetPhotos() {
  const [photos, setPhotos] = useState<Photos[]>();

  function getAlbumsData() {
    getPhotos().then((data) => setPhotos(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getAlbumsData, []);

  return photos;
}
