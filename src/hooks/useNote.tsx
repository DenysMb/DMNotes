import { useState, useEffect } from "react";
import { colors } from "../shared/constants";
import { fetchNote } from "../shared/utils";

export type NoteProps = {
  id: number;
  user: string;
  title?: string;
  note?: string;
  color?: typeof colors[number];
};

const useNote = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState<NoteProps | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    fetchNote(id, setNote, setLoading);
  }, []);

  return { note, loading };
};

export default useNote;
