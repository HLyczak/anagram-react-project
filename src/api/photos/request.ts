export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export async function getPhoto(id: string) {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo: Photos = await respone.json();
  return photo;
}

export async function getPhotos() {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos: Photos[] = await respone.json();
  return photos;
}

export async function getPhotosById(albumId: string) {
  const respone = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  );
  const photos: Photos[] = await respone.json();
  return photos;
}
