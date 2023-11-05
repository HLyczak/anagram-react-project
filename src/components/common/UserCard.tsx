import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { User } from "../../api/users/requests";

interface Props {
  name: string;
  description: string;
  avatar: string;
  website?: string;
  userId?: string;
  address?: User["address"];
  showDetails?: boolean;
}

export default function UserCard({
  name,
  description,
  avatar,
  website,
  userId,
  address,
  showDetails,
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
      <CardActions>
        {userId && (
          <Button size="small" component={Link} to={`/users/${userId}/todos`}>
            ToDo List
          </Button>
        )}
        {userId && showDetails && (
          <Button size="small" component={Link} to={`/users/${userId}`}>
            Details
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
