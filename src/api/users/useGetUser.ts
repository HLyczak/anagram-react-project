import { useEffect, useState } from "react";
import { User, getUser } from "./requests";

export function useGetUser(userId: string) {
  const [user, setUser] = useState<User>();

  // tablica dla use effect daje nam to ze wywołuje sie tylko raz po wejsciu na strone i załadowaniu elementu
  useEffect(()=>{
    getUser(userId).then((data) => setUser(data));
  }, [userId]);

  return user;
}
