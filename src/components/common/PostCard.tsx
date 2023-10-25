import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Post } from "../../api/posts/requests";

export function PostCard({ body, title }: Post) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
        title="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">User</Button>
        <Button size="small">Details</Button>
        <Button size="small">Comments</Button>
      </CardActions>
    </Card>
  );
}
