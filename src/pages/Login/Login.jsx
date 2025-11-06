import styles from "./login.module.css";
import Button from "../../components/AppLayout/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useEffect, useState } from "react";

function Login() {
  const { login, isAuthenticated, isCredentialsIncorrect } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("guestUser@gmail.com");
  const [password, setPassword] = useState("pass123");

  useEffect(() => {
    if (isAuthenticated) navigate("/worldwise", { replace: true });
  }, [isAuthenticated, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (email || password) login(email, password);
  }

  return (
    <section className={styles.loginContainer}>
      {isCredentialsIncorrect && (
        <p className={styles.incorrectText}>
          Incorrect email or password. Please try again.
        </p>
      )}
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <Button>Login</Button>
      </form>
    </section>
  );
}

export default Login;
