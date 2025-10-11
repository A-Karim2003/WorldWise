import styles from "../WorldWise.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div
      className={styles.map}
      onClick={() => {
        navigate("/worldwise/form");
      }}
    >
      <h1>{lat}</h1>
      <h1>{lng}</h1>
    </div>
  );
}

export default Map;
