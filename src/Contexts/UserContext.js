import { createContext } from "react";
import { useLocalStorage } from "../hooks/locatStorage";
import { toast } from "react-hot-toast";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const isLoggedIn = !!user;

  const logout = () => {
    if (user) {
      setUser(null);
      toast.error(`${user.first_name} ${user.last_name} logged out`);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
