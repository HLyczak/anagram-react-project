import { useEffect, useState } from "react";
import { User, getUsers } from "./requests";

export function useGetUsers() {
  const [users, setUsers] = useState<User[]>();

  // tablica dla use effect daje nam to ze wywołuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getUsers().then((data) => setUsers(data));
  }, []);

  return users;
}
