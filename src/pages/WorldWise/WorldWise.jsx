import styles from "./worldwise.module.css";
import Map from "./Map/Map";
import SidePanel from "./SidePanel/SidePanel";
import UserProfile from "../../components/UserProfile";

function worldwise() {
  return (
    <section className={styles.worldwiseContainer}>
      <UserProfile />
      <SidePanel />
      <Map />
    </section>
  );
}
export default worldwise;
