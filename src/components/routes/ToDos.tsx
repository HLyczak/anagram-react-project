import React from "react";

import { Card } from "../common/Card";
import "./Comments.css";
import { useParams } from "react-router-dom";
import { useGetToDos } from "../../api/todos/useGetToDosByUserId";
import BasicTable from "../common/List";

export default function ToDos() {
  const { id } = useParams();
  const toDos = useGetToDos(id || "");
  //na comentarzy nie ma postow dopiero sie laduja
  if (!toDos) {
    return <div>loading ...</div>;
  }

  return (
    <div className="todos">
      <BasicTable data={toDos} />
    </div>
  );
}
