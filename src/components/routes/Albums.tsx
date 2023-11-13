import React from "react";
import { useGetAlbums } from "../../api/albums/userGetAlbums";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import "./Albums.css";
import { Link } from "react-router-dom";

export default function Albums() {
  const albums = useGetAlbums();
  //na comentarzy nie ma postow dopiero sie laduja
  if (!albums) {
    return <div>loading ...</div>;
  }
  return (
    <div className="albums">
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {albums.map((album) => (
          <ListItem key={album.id} component={Link} to={`/photos/${album.id}`}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={album.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
