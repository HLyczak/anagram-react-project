import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetUser } from "../../api/users/useGetUser";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useGetUser(id || "");

  if (!user) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
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
        <Button type="submit">Submmit</Button>
      </form>
    </div>
  );
}
