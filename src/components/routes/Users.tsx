import React from "react";
import { useGetUsers } from "../../api/users/useGetUsers";
import UserCard from "../common/UserCard";
import "./Users.css";
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
          userId={user.id}
          showDetails
        />
      ))}
    </div>
  );
}
