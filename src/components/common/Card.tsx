import * as React from "react";
import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Post } from "../../api/posts/requests";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  userId?: number;
  postId?: number;
  statuses?: boolean;
}

export function Card({ description, title, image, userId, postId }: Props) {
  return (
    <MCard>
      {image && <CardMedia sx={{ height: 140 }} image={image} title="image" />}
      {/* jesli image to wykonaj to co po && */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
        {userId && (
          <Typography variant="body2" color="text.secondary">
            {userId}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {userId && (
          <Button size="small" component={Link} to={`/users/${userId}`}>
            User
          </Button>
        )}
        {postId && (
          <Button size="small" component={Link} to={`/posts/${postId}`}>
            Details
          </Button>
        )}
        {postId && (
          <Button size="small" component={Link} to={`/comments/${postId}`}>
            Comments
          </Button>
        )}
      </CardActions>
    </MCard>
  );
}
