import { Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetPhoto } from "../../api/photos/UserGetPhoto";
import "./EditPhoto.css";

export default function EditPhoto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const photo = useGetPhoto(id || "");

  if (!photo) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (!formData.get("title")) {
          toast.error("Invalid arguments");
          return;
        }
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${photo.id}`,
          {
            method: "PATCH",
            body: formData,
          }
        );
        await response.json();
        toast.success("Success");

        navigate("/photos");
      }}
    >
      <div className="EditPhoto">
        <TextField
          id="title"
          name="title"
          label="Title"
          defaultValue={photo.title}
        />
        <Button type="submit" color="secondary">
          Submmit
        </Button>
      </div>
    </form>
  );
}
