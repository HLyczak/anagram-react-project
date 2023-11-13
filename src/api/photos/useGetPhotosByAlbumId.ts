import { useEffect, useState } from "react";
import { Photos, getPhotosById } from "./request";

export function useGetPhotosByAlbumId(albumId: string) {
  const [photos, setPhotos] = useState<Photos[]>();

  function getPhotosByIdData() {
    getPhotosById(albumId).then((data) => setPhotos(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getPhotosByIdData, []);

  return photos;
}
