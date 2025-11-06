import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import styles from "../pages/WorldWise/worldWise.module.css";

function UserProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className={styles.userProfile}>
      <div className={styles.imgContainer}>
        <img src={user.avatar} alt="" />
      </div>
      <h3>Welcome, {user.username}</h3>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserProfile;
