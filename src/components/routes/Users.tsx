import React from "react";
import { useGetUsers } from "../../api/users/useGetUsers";
import UserCard from "../common/UserCard";
import "./Users.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Users() {
  const users = useGetUsers();
  //na comentarzy nie ma postow dopiero sie laduja
  if (!users) {
    return <div>loading ...</div>;
  }

  return (
    <div className="users">
      {users.map((user) => (
        <UserCard
          name={user.name}
          description={user.email}
          avatar={user.name
            .split(" ")
            .map((t) => t[0])
            .join("")}
        >
          <Button size="small" component={Link} to={`/users/${user.id}/todos`}>
            ToDo List
          </Button>
          <Button size="small" component={Link} to={`/users/${user.id}`}>
            Details
          </Button>
          <Button size="small" component={Link} to={`/users/edit/${user.id}`}>
            Edit
          </Button>
        </UserCard>
      ))}
    </div>
  );
}
