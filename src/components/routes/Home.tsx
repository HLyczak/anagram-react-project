import { useGetPosts } from "../../api/posts/useGetPosts";
import { Card } from "../common/Card";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";

export default function Home() {
  const posts = useGetPosts();
  const navigate = useNavigate();

  if (!posts) {
    return <CircularProgress color="secondary" />;
  }

  async function onDelete(id: number) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    toast.success("Success");
    navigate("/");
  }

  return (
    <div className="posts">
      {/* <button
        onClick={() => {
          throw new Error("Errror");
        }}
      >
        ERROR
      </button> */}
      {posts.map((post) => (
        <Card
          description={post.body}
          title={post.title}
          image={post.url}
          key={post.id}
        >
          <Button
            size="small"
            component={Link}
            to={`/users/${post.userId}`}
            color="secondary"
          >
            User
          </Button>
          <Button
            size="small"
            component={Link}
            to={`/posts/${post.id}`}
            color="secondary"
          >
            Details
          </Button>
          <Button
            size="small"
            component={Link}
            to={`/comments/${post.id}`}
            color="secondary"
          >
            Comments
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => onDelete(post.id)}
          >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
}
