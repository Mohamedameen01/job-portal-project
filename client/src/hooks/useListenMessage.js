import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSocketContext } from "../context/SocketContext";
import { setSendChatMessage, setUnreadMessages } from "../redux/chatSlice";
import notificationSound from "/assets/sounds/positive-notification.wav";

function useListenMessage() {
  const { socket } = useSocketContext();
  const { chats, selectedUser } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    //Sending Message:
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const audio = new Audio(notificationSound);
      audio.play();
      const isChatOpen =
        selectedUser._id === newMessage.senderId ? true : false;
      if (isChatOpen) {
        dispatch(setSendChatMessage([...chats, newMessage]));
      }
    });

    // Setting Notification As Read or Unread:
    socket?.on("getNotification", (res) => {
      const isChatOpen = selectedUser?._id === res.senderId ? true : false;
      if (!isChatOpen) {
        dispatch(setUnreadMessages(res));
      }
    });

    return () => {
      socket?.off("newMessage");
      socket?.off("getNotification");
    };
  }, [socket, chats, selectedUser]);
}

export default useListenMessage;
