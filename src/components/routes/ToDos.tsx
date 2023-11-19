import "./Todos.css";
import { useParams } from "react-router-dom";
import { useGetToDos } from "../../api/todos/useGetToDosByUserId";
import Table from "../common/Table";
import { CircularProgress } from "@mui/material";

export default function ToDos() {
  const { id } = useParams();
  const toDos = useGetToDos(id || "");

  if (!toDos) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div className="ToDos">
      <Table data={toDos} />
    </div>
  );
}
