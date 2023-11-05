import { useEffect, useState } from "react";
import { Albums, getAlbums } from "./requests";

export function useGetAlbums() {
  const [albums, setAlbums] = useState<Albums[]>();

  function getAlbumsData() {
    getAlbums().then((data) => setAlbums(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(getAlbumsData, []);

  return albums;
}
