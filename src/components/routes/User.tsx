import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useGetUser } from "../../api/users/useGetUser";
import UserCard from "../common/UserCard";

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
        userId={user.id}
      />
      <Outlet />
    </div>
  );
}
