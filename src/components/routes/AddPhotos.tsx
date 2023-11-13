import { Button, TextField } from "@mui/material";

export default function AddPhotos() {
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
            }ś
          );
          const data = await response.json();
          console.log(data);
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
