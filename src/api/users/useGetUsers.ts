import { useEffect, useState } from "react";
import { User, getUsers } from "./requests";

export function useGetUsers() {
  const [users, setUsers] = useState<User[]>();

  function useGetUsersData() {
    getUsers().then((data) => setUsers(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(useGetUsersData, []);

  return users;
}
