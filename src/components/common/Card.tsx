import React from "react";
import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  statuses?: boolean;
  children?: React.ReactNode;
}

export function Card({ description, title, image, children }: Props) {
  return (
    <MCard
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
      </CardContent>
      <CardActions>{children}</CardActions>
    </MCard>
  );
}
