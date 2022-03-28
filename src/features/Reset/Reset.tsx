import { sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { auth } from "../../firebase";
import Styles from "./Reset.module.scss";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/", { replace: true });
  }, [navigate, user, loading]);

  return (
    <div className={Styles.Reset}>
      <Header />

      <div className={Styles.ResetBody}>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Button
          label="Send password reset email"
          onClick={() => sendPasswordResetEmail(auth, email)}
          color="RED"
        />
        <div className={Styles.ResetText}>
          Don't have an account? <Link to="/register">Register now</Link>
        </div>
      </div>
    </div>
  );
};

export default Reset;
