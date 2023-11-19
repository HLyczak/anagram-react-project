import React from "react";
import { useGetAlbums } from "../../api/albums/userGetAlbums";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./Albums.css";
import { Link } from "react-router-dom";
import { CircularProgress, Divider } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export default function Albums() {
  const albums = useGetAlbums();

  if (!albums) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div className="albums">
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {albums.map((album) => (
          <React.Fragment key={album.id}>
            <ListItem component={Link} to={`/photos/${album.id}`}>
              <ListItemAvatar>
                <Avatar>
                  <PermMediaIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={album.title} sx={{ color: "black" }} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
