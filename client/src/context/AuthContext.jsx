import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userLocal, setUserLocal] = useState(() =>
    JSON.parse(localStorage.getItem("USER_LOCAL"))
  );
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (userLocal?.token) {
      const decoded = jwtDecode(userLocal.token);
      setUser(decoded);
      setUserId(decoded.id);
    }
  }, [userLocal]);

  return (
    <AuthContext.Provider value={{ user ,userId, setUserId, userLocal }}>
      {children}
    </AuthContext.Provider>
  );
};
