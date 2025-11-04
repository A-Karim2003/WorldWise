import { createContext, useContext } from "react";

function generateAvatar() {
  const s = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
  return `https://api.dicebear.com/6.x/bottts/svg?seed=${encodeURIComponent(
    s
  )}`;
}

const DEMO_USER = {
  user: "Guest1266",
  email: "guest.user@gmail.com",
  password: "pass123",
  avatar: generateAvatar(),
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useContext(reducer, {
    user: null,
    loggedIn: false,
  });
  function login(email, password) {}
  function logout() {}
  return <AuthContext>{children}</AuthContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
