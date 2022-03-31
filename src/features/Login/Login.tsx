import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./Login.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../firebase";
import Button from "../../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Loading from "../../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  return (
    <div className={Styles.Login}>
      <Loading show={loading} />

      <Header />

      <div className={Styles.LoginBody}>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <Button
          label="Login"
          color="GREEN"
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
        />

        <Button
          icon={["fab", "google"]}
          label="Login with Google"
          color="BLUE"
          onClick={signInWithGoogle}
        />

        <div className={Styles.LoginText}>
          <Link to="/reset">Forgot password</Link>
        </div>

        <div className={Styles.LoginText}>
          Don't have an account? <Link to="/register">Register now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
