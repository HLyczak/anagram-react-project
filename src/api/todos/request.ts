import { toast } from "react-toastify";

export interface ToDos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getToDos(userId: string) {
  const respone = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );

  if(!respone.ok) {
    toast.error('Błąd');
    return;
  }
  
  const toDos: ToDos[] = await respone.json();
  return toDos;
}
