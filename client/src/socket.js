import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  incrementUnseen,
} from "./store/conversations";
import { updateMessage } from "./store/utils/thunkCreators";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", async (data) => {
    store.dispatch(setNewMessage(data.message, data.sender));
    let { message, sender, recipientId } = data;
    const user = store.getState().user;
    const activeChat = store.getState().activeConversation;

    if (user.id === recipientId && activeChat.id === message.conversationId) {
      await store.dispatch(updateMessage(message.id));
      message.seen = true;
    } else if (user.id === recipientId) {
      store.dispatch(incrementUnseen(message.conversationId))
    }
    store.dispatch(setNewMessage(message, sender))
  });
});

export default socket;
