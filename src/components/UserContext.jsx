import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const signUp = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <UserContext.Provider value={{ user, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
