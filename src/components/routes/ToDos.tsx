import "./Todos.css";
import { useParams } from "react-router-dom";
import { useGetToDos } from "../../api/todos/useGetToDosByUserId";
import BasicTable from "../common/List";
import { CircularProgress } from "@mui/material";

export default function ToDos() {
  const { id } = useParams();
  const toDos = useGetToDos(id || "");
  //na comentarzy nie ma postow dopiero sie laduja
  if (!toDos) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div className="ToDos">
      <BasicTable data={toDos} />
    </div>
  );
}
