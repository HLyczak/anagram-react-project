import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useGetUser } from "../../api/users/useGetUser";
import UserCard from "../common/UserCard";
import { Button } from "@mui/material";

export default function User() {
  const { id } = useParams();
  const user = useGetUser(id || "");
  //na comentarzy nie ma postow dopiero sie laduja
  if (!user) {
    return <div>loading ...</div>;
  }

  return (
    <div className="user">
      <UserCard
        name={user.name}
        description={user.email}
        avatar={user.name
          .split(" ")
          .map((t) => t[0])
          .join("")}
        website={user.website}
        address={user.address}
      >
        <Button size="small" component={Link} to={`/users/${user.id}/todos`}>
          ToDo List
        </Button>
        <Button size="small" component={Link} to={`/users/edit/${user.id}`}>
          Edit
        </Button>
      </UserCard>
      <Outlet />
    </div>
  );
}
