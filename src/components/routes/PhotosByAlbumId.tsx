import React from "react";

import { useParams } from "react-router-dom";
import { useGetPhotosByAlbumId } from "../../api/photos/useGetPhotosByAlbumId";
import { Card } from "../common/Card";

export default function PhotosByAlbumId() {
  const { id } = useParams();
  const photos = useGetPhotosByAlbumId(id || "");
  //na comentarzy nie ma postow dopiero sie laduja
  if (!photos) {
    return <div>loading ...</div>;
  }

  return (
    <div className="photos">
      {photos.map((photo) => (
        <Card description={photo.title} image={photo.url} key={photo.id} />
      ))}
    </div>
  );
}
