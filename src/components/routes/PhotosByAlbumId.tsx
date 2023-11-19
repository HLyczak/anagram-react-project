import { useParams } from "react-router-dom";
import { useGetPhotosByAlbumId } from "../../api/photos/useGetPhotosByAlbumId";
import { Card } from "../common/Card";
import { CircularProgress } from "@mui/material";

export default function PhotosByAlbumId() {
  const { id } = useParams();
  const photos = useGetPhotosByAlbumId(id || "");

  if (!photos) {
    return <CircularProgress color="secondary" />;
  }
  return (
    <div className="photos">
      {photos.map((photo) => (
        <Card description={photo.title} image={photo.url} key={photo.id} />
      ))}
    </div>
  );
}
