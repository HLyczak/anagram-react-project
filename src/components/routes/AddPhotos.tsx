import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddPhotos.css";

export default function AddPhotos() {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (
          !formData.get("userId") ||
          !formData.get("title") ||
          !formData.get("body")
        ) {
          toast.error("Invalid arguments");
          return;
        }
        await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: formData,
        });
        toast.success("Success");
        navigate("/");
      }}
    >
      <div className="AddPhotos">
        <TextField id="userId" name="userId" label="UserId" />
        <TextField id="title" name="title" label="Title" />
        <TextField id="body" name="body" label="Body" />
        <Button type="submit" color="secondary">
          Submmit
        </Button>
      </div>
    </form>
  );
}
