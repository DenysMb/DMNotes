import { useState, useEffect } from "react";
import { fetcher } from "../shared/utils";

export type UserProps = {
  uid: string;
  email: string;
  authProvider: string;
  name: string;
};

const useUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProps[]>([]);

  useEffect(() => {
    setLoading(true);
    fetcher("users", "uid", setUser, setLoading);
  }, []);

  return { user: user[0], loading };
};

export default useUser;
