export interface Albums {
  id: number;
  title: string;
  userId: number;
}

export async function getAlbums() {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const albums: Albums[] = await respone.json();
  return albums;
}
