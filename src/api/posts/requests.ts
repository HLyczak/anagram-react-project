export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  url: string;
}

export async function getPosts() {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: Post[] = await respone.json();
  const posts = data.map((post) => ({
    ...post,
    url: `https://picsum.photos/id/${post.id + 25}/600/200`,
  })); //destrukcja
  return posts;
}

export async function getPost(postId: string) {
  const respone = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data: Post = await respone.json();
  const post = {
    ...data,
    url: `https://picsum.photos/id/${data.id + 20}/600/200`,
  }; //destrukcja
  return post;
}
