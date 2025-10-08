import styles from "./worldwise.module.css";
import Map from "./Map/Map";
import SidePanel from "./SidePanel/SidePanel";

function worldwise({ length }) {
  return (
    <section className={styles.worldwiseContainer}>
      <SidePanel length={length} />
      <Map />
    </section>
  );
}
export default worldwise;
