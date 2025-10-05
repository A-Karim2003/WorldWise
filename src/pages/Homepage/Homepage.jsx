import styles from "./homepage.module.css";
import Button from "../../components/AppLayout/Button";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
        <h1>
          You travel the world. <br /> WorldWise keeps track of your adventures.
        </h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Button> START TRACKING NOW </Button>
      </div>
    </div>
  );
}

export default Homepage;
