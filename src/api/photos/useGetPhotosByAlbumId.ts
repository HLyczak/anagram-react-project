import { useEffect, useState } from "react";
import { Photos, getPhotosById } from "./request";

export function useGetPhotosByAlbumId(albumId: string) {
  const [photos, setPhotos] = useState<Photos[]>();

  // tablica dla use effect daje nam to ze wywołuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=> {
    getPhotosById(albumId).then((data) => setPhotos(data));
  }, [albumId]);

  return photos;
}
