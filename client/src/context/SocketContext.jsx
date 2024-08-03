import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/chatSlice";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selected, setSelected] = useState(false);
  const { userId } = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      const socket = io(import.meta.env.VITE_API_URL, {
        query: { userId },
      });
      setSocket(socket);

      socket.on("connect", () => {
        console.log("Connected to socket server");
      });

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [userId]);

  // For Marking Specific Message:
  const markOneMessageAsRead = useCallback((message, userLists, messages) => {
    // Open The Chat :
    const user = userLists.find((user) => user._id === message?.senderId);
    setSelected(true);
    dispatch(setSelectedUser(user));
  }, []);

  // For Finding Each User Unread Messages:
  const findEachUserUnreadMessages = useCallback((id, messages) => {
    const message = messages.filter((m) => m.senderId === id);
    return message;
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        onlineUsers,
        selected,
        setSelected,
        markOneMessageAsRead,
        findEachUserUnreadMessages,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
