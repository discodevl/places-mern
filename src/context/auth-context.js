import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

function authContextProvider() {
  return <div>auth-context</div>;
}

export default authContextProvider;
