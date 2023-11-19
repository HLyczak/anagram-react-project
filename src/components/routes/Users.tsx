import { useGetUsers } from "../../api/users/useGetUsers";
import UserCard from "../common/UserCard";
import "./Users.css";
import { Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function Users() {
  const users = useGetUsers();

  if (!users) {
    return <CircularProgress color="secondary" />;
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
          <Button
            size="small"
            component={Link}
            to={`/users/${user.id}/todos`}
            color="secondary"
          >
            ToDo List
          </Button>
          <Button
            size="small"
            component={Link}
            to={`/users/${user.id}`}
            color="secondary"
          >
            Details
          </Button>
          <Button
            size="small"
            component={Link}
            to={`/users/edit/${user.id}`}
            color="secondary"
          >
            Edit
          </Button>
        </UserCard>
      ))}
    </div>
  );
}
