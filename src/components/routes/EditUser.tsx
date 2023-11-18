import { Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetUser } from "../../api/users/useGetUser";
import "./EditUser.css";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useGetUser(id || "");

  if (!user) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (
          !formData.get("userId") ||
          !formData.get("username") ||
          !formData.get("email")
        ) {
          toast.error("Invalid arguments");
          return;
        }
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          {
            method: "PUT",
            body: formData,
          }
        );
        await response.json();
        toast.success("Success");

        navigate("/users");
      }}
    >
      <div className="EditUser">
        <TextField
          id="userId"
          name="userId"
          label="Name"
          defaultValue={user.name}
        />
        <TextField
          id="username"
          name="username"
          label="Username"
          defaultValue={user.username}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          defaultValue={user.email}
        />
        <Button type="submit" color="secondary">
          Submmit
        </Button>
      </div>
    </form>
  );
}
