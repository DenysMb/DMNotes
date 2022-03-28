/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Note from "../../components/Note";
import SearchBar from "../../components/SearchBar";
import Styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { colors } from "../../shared/constants";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState<DocumentData | undefined>(undefined);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setUserData(data);
    } catch (err) {
      console.error(err);
      setUserData(undefined);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    fetchUserName();
  }, [user, loading]);

  const handleNewNote = () => {
    navigate("/new", { replace: true });
  };

  return (
    <div className={Styles.Home}>
      <Header />
      <SearchBar />
      <div className={Styles.HomeNotes}>
        <div className={Styles.HomeUserName}>{userData?.name}</div>
        {colors.map((color) => (
          <Note color={color} key={color} />
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
