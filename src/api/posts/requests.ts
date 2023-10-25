export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts() {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await respone.json();
  return posts;
}
