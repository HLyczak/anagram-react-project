import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { User } from "../../api/users/requests";

interface Props {
  name: string;
  description: string;
  avatar: string;
  website?: string;
  address?: User["address"];
  children?: React.ReactNode;
}

export default function UserCard({
  name,
  description,
  avatar,
  website,
  address,
  children,
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        title={name}
        subheader={description}
      />
      {website && (
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            component={Link}
            to={`https://${website}`}
          >
            {website}
          </Typography>
        </CardContent>
      )}
      {address && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Address
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address.street} {address.suite} {address.zipcode} {address.city}
          </Typography>
        </CardContent>
      )}
      <CardActions>{children}</CardActions>
    </Card>
  );
}
