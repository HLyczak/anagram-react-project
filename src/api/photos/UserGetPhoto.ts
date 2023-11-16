import { useEffect, useState } from "react";
import { Photos, getPhoto, getPhotos } from "./request";

export function useGetPhoto(id: string) {
  const [photo, setPhoto] = useState<Photos>();

  function getPhotoData() {
    getPhoto(id).then((data) => setPhoto(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getPhotoData, []);

  return photo;
}
