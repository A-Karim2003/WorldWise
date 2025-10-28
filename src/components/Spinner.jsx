const styles = {
  container: {
    height: "60vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: "64px",
    height: "64px",
    border: "4px solid #f97316",
    borderTop: "4px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default function Spinner() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
