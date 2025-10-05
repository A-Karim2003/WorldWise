import styles from "./login.module.css";
import Button from "../../components/AppLayout/Button";

function Login() {
  return (
    <section className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" placeholder="Email" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder="Password" />
        </div>

        <Button>Login</Button>
      </form>
    </section>
  );
}

export default Login;
