import { useState, useEffect } from "react";
import { colors } from "../shared/constants";
import { fetcher } from "../shared/utils";

export type NoteProps = {
  id: number;
  user: string;
  title?: string;
  note?: string;
  color?: typeof colors[number];
  createdAt: number;
  updatedAt: number;
};

const useNotes = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState<NoteProps[]>([]);

  useEffect(() => {
    setLoading(true);
    fetcher("notes", "user", setNotes, setLoading);
  }, []);

  return { notes, loading };
};

export default useNotes;
