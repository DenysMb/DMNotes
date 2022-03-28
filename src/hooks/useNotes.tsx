import { useState, useEffect } from "react";
import { colors } from "../shared/constants";
import { fetcher } from "../shared/utils";

export type NoteProps = {
  id: number;
  user: string;
  title?: string;
  note?: string;
  color?: typeof colors[number];
};

const useNotes = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  useEffect(() => {
    fetcher("notes", "user", setNotes);
  }, []);

  return notes;
};

export default useNotes;
