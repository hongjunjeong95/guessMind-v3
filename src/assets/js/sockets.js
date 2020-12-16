import { handleNewMsg } from "./chat";
import { handleLogin, handleNewuser } from "./notifications";
import {
  handleBeganPth,
  handleErased,
  handleFilled,
  handleSetPenciled,
  handleStrokenPath,
} from "./paint";

let socket = null;

export const getSocket = () => socket;

export const initSocket = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.login, handleLogin);
  socket.on(events.newUser, handleNewuser);
  socket.on(events.newMsg, handleNewMsg);
  socket.on(events.beganPth, handleBeganPth);
  socket.on(events.strokenPath, handleStrokenPath);
  socket.on(events.filled, handleFilled);
  socket.on(events.erased, handleErased);
  socket.on(events.setPenciled, handleSetPenciled);
};
