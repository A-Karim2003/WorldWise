import styles from "../WorldWise.module.css";
import { useSearchParams } from "react-router-dom";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();

  console.log(searchParam);

  return <div className={styles.map}></div>;
}

export default Map;
