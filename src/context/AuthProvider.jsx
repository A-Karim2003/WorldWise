import { createContext, useContext, useReducer } from "react";

function generateAvatar() {
  const s = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
  return `https://api.dicebear.com/6.x/bottts/svg?seed=${encodeURIComponent(
    s
  )}`;
}

const DEMO_USER = {
  username: "Guest1266",
  email: "guestUser@gmail.com",
  password: "pass123",
  avatar: generateAvatar(),
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isCredentialsIncorrect: false,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isCredentialsIncorrect: false,
      };
    case "credentials/incorrect":
      return { ...state, isCredentialsIncorrect: true };
    default:
      throw new Error("Unknown action");
  }
}

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isCredentialsIncorrect }, dispatch] =
    useReducer(reducer, {
      user: null,
      isAuthenticated: false,
      isCredentialsIncorrect: false,
    });

  function login(email, password) {
    if (email === DEMO_USER.email && password === DEMO_USER.password)
      dispatch({ type: "login", payload: DEMO_USER });
    else {
      dispatch({ type: "credentials/incorrect" });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext
      value={{ user, isAuthenticated, login, logout, isCredentialsIncorrect }}
    >
      {children}
    </AuthContext>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
