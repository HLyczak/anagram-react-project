import { useGetComments } from "../../api/comments/useGetComments";
import { Card } from "../common/Card";
import "./Comments.css";
import { CircularProgress } from "@mui/material";

export default function Comments() {
  const comments = useGetComments();
  //na comentarzy nie ma postow dopiero sie laduja
  if (!comments) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div className="comments">
      {comments.map((comment) => (
        <Card
          description={comment.body}
          title={comment.name}
          key={comment.id}
        />
      ))}
    </div>
  );
}
