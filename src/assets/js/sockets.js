import { handleNewMsg } from "./chat";
import { handleLogin, handleNewuser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const initSocket = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.login, handleLogin);
  socket.on(events.newUser, handleNewuser);
  socket.on(events.newMsg, handleNewMsg);
};
