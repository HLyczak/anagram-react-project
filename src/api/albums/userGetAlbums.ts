import { useEffect, useState } from "react";
import { Albums, getAlbums } from "./requests";

export function useGetAlbums() {
  const [albums, setAlbums] = useState<Albums[]>();

  // tablica dla use effect daje nam to ze wywołuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getAlbums().then((data) => setAlbums(data));
  }, []);

  return albums;
}
