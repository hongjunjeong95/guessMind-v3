import { handleNewMsg } from "./chat";
import {
  handleLogin,
  handleNewuser,
  handledisConnected,
} from "./notifications";
import {
  handleBeganPth,
  handleErased,
  handleFilled,
  handleSetPenciled,
  handleStrokenPath,
} from "./paint";
import {
  handleGameEnded,
  handleGameStarted,
  handlePainterNotif,
  handlePlayerUpdate,
} from "./player";

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
  socket.on(events.playerUpdate, handlePlayerUpdate);
  socket.on(events.disconnected, handledisConnected);
  socket.on(events.painterNotif, handlePainterNotif);
  socket.on(events.gameStarted, handleGameStarted);
  socket.on(events.gameEnded, handleGameEnded);
};
