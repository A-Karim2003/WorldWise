import styles from "./cityList.module.css";

function CityCard() {
  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <h4 className={styles.label}>CITY NAME</h4>
        <p className={styles.value}>🇪🇸 Quiroga</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>YOU WENT TO QUIROGA ON</h4>
        <p className={styles.value}>Thursday, October 9, 2025</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>LEARN MORE</h4>
        <p className={styles.linkContainer}>
          <a href="#" className={styles.link}>
            Check out Quiroga on Wikipedia →
          </a>
        </p>
      </div>

      <button className={styles.backButton}>← BACK</button>
    </div>
  );
}

export default CityCard;
