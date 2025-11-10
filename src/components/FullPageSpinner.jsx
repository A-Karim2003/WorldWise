const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    inset: 0,
    backgroundColor: "rgb(255, 255, 255)",

    zIndex: 9999,
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

export default function FullPageSpinner() {
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
