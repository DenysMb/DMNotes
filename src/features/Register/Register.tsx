import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import Styles from "./Register.module.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/", { replace: true });
  }, [navigate, user, loading]);

  const register = () => {
    setCheck(true);
    if (name && email && password)
      registerWithEmailAndPassword(name, email, password);
  };

  return (
    <div className={Styles.Register}>
      <Header />

      <div className={Styles.RegisterBody}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          error={check && !name}
          helperText={"Full name cannot be empty"}
        />

        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail address"
          error={check && !email}
          helperText={"E-mail address cannot be empty"}
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          error={check && !password}
          helperText={"Password cannot be empty"}
        />

        <Button label="Register" onClick={register} color="GREEN" />

        <Button
          label="Register with Google"
          icon={["fab", "google"]}
          onClick={signInWithGoogle}
          color="BLUE"
        />

        <div className={Styles.RegisterText}>
          Already have an account? <Link to="/login">Login now</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
