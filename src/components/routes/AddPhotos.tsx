import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddPhotos() {
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await response.json();
          toast.success("Success");

          navigate("/");
        }}
      >
        <TextField
          id="userId"
          name="userId"
          label="UserId"
          defaultValue="/userId"
        />
        <TextField id="title" name="title" label="Title" defaultValue="Title" />
        <TextField id="body" name="body" label="Body" defaultValue="Body" />
        <Button type="submit">Submmit</Button>
      </form>
    </div>
  );
}
