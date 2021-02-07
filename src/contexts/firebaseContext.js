import { createContext } from "react";
import { useUserData } from "../firebase/userHook";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const userData = useUserData();
  const { user, username } = userData;

  return (
    <UserContext.Provider value={{ user, username }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
