/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Note from "../../components/Note";
import SearchBar from "../../components/SearchBar";
import Styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import useNotes from "../../hooks/useNotes";
import Loading from "../../components/Loading";
import { convertFromRaw } from "draft-js";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const { notes, loading: loadingUser } = useNotes();
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const newNoteId = notes.length + 1;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [user]);

  useEffect(() => {
    setFilteredNotes(notes.sort((x, y) => y.updatedAt! - x.updatedAt!));
  }, [notes]);

  const handleNewNote = () => {
    navigate("/" + newNoteId, { replace: true });
  };

  const handleFliterNote = (value: string) => {
    const filtered = notes.filter((note) => {
      const matchTitle = new RegExp(value, "i").test(note.title!);
      const plainText = convertFromRaw(JSON.parse(note.note!)).getPlainText();
      const matchNote = new RegExp(value, "i").test(plainText);

      return matchTitle || matchNote;
    });

    setFilteredNotes(filtered);
  };

  return (
    <div className={Styles.Home}>
      <Loading show={loading || loadingUser} />

      <Header />
      <SearchBar filter={handleFliterNote} />
      <div className={Styles.HomeNotes}>
        {filteredNotes.map((note) => (
          <Note data={note} />
        ))}
      </div>
      <Button
        icon={"plus"}
        label="Create note"
        onClick={handleNewNote}
        fullWidth
      />
    </div>
  );
};

export default Home;
