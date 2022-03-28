import React, { createContext, useContext, useEffect } from "react";
import useNotes, { NoteProps } from "../hooks/useNotes";
import useUser, { UserProps } from "../hooks/useUser";

type DataProviderProps = {
  children: any;
};

type DataContextProps = {
  user?: UserProps;
  notes: NoteProps[];
};

const initialValue = {
  user: undefined,
  notes: [],
};

const DataContext = createContext<DataContextProps>(initialValue);

const DataProvider = ({ children }: DataProviderProps) => {
  const { user } = useUser();
  const { notes } = useNotes();

  useEffect(() => {
    // console.log("USER", user);
    // console.log("NOTES", notes);
  }, [user, notes]);

  return (
    <DataContext.Provider value={{ user, notes }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
