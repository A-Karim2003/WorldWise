import styles from "./worldwise.module.css";
import Map from "./Map/Map";
import SidePanel from "./SidePanel/SidePanel";

function worldwise() {
  return (
    <section className={styles.worldwiseContainer}>
      <SidePanel />
      <Map />
    </section>
  );
}
export default worldwise;
