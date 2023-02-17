import { createContext } from "react";
import { useLocalStorage } from "../hooks/locatStorage";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const isLoggedIn = !!user;
  console.log(user);

  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
