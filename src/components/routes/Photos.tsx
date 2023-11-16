import { Button } from "@mui/material";
import { useGetPhotos } from "../../api/photos/UserGetPhotos";
import { Card } from "../common/Card";
import "./Photos.css";
import { Link } from "react-router-dom";
export default function Photos() {
  const photos = useGetPhotos();
  //na poczatku nie ma postow dopiero sie laduja
  if (!photos) {
    return <div>loading ...</div>;
  }
  /// ...post rozpakowuje nam posta post.body
  return (
    <div className="photos">
      {photos.map((photo) => (
        <Card description={photo.title} image={photo.url} key={photo.id}>
          <Button size="small" component={Link} to={`/photo/edit/${photo.id}`}>
            Edit title
          </Button>
        </Card>
      ))}
    </div>
  );
}
