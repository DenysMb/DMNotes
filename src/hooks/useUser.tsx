import { useState, useEffect } from "react";
import { fetcher } from "../shared/utils";

export type UserProps = {
  uid: string;
  email: string;
  authProvider: string;
  name: string;
};

const useUser = () => {
  const [user, setUser] = useState<UserProps[]>([]);

  useEffect(() => {
    fetcher("users", "uid", setUser);
  }, []);

  return user[0];
};

export default useUser;
