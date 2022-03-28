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

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const { notes, loading: loadingUser } = useNotes();
  const newNoteId = notes.length + 1;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [user]);

  const handleNewNote = () => {
    navigate("/" + newNoteId, { replace: true });
  };

  return (
    <div className={Styles.Home}>
      {(loading || loadingUser) && <Loading />}

      <Header />
      <SearchBar />
      <div className={Styles.HomeNotes}>
        {notes.map((note) => (
          <Note
            id={note.id}
            title={note.title}
            note={note.note}
            color={note.color}
          />
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
