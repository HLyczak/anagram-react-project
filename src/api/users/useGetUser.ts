import { useEffect, useState } from "react";
import { User, getUser } from "./requests";

export function useGetUser(userId: string) {
  const [user, setUser] = useState<User>();

  function useGetUserData() {
    getUser(userId).then((data) => setUser(data));
  }
  // tablica dla use effect daje nam to ze renderuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(useGetUserData, []);

  return user;
}
