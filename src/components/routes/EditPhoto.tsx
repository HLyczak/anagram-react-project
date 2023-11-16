import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetPhoto } from "../../api/photos/UserGetPhoto";

export default function ćć() {
  const navigate = useNavigate();
  const { id } = useParams();
  const photo = useGetPhoto(id || "");

  if (!photo) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
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
        <TextField
          id="title"
          name="title"
          label="Title"
          defaultValue={photo.title}
        />
        <Button type="submit">Submmit</Button>
      </form>
    </div>
  );
}
