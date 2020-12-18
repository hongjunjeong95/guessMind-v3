import events from "./events";

import { chooseWord } from "./words";

export let sockets = [];

let painter = null;
let word = null;
let timeout = null;

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });
  const choosePainter = () =>
    sockets[Math.floor(Math.random() * sockets.length)];
  const startGame = () => {
    if (sockets.length > 1) {
      superBroadcast(events.gameStarted);
      painter = choosePainter();
      word = chooseWord();
      io.to(painter.id).emit(events.painterNotif, { word });
      timeout = setTimeout(endGame, 30000);
    }
  };
  const endGame = () => {
    if (timeout !== null) clearTimeout(timeout);
    superBroadcast(events.gameEnded);
    setTimeout(startGame, 2000);
  };
  const addPoints = (id) => {
    console.log("addPoints");
    console.log(sockets);
    console.log(socket.id);
    sockets = sockets.map((socket) => {
      if (socket.id === id) socket.points += 10;
      return socket;
    });
    sendPlayerUpdate();
    endGame();
  };

  socket.on(events.sendMsg, ({ message, username }) => {
    if (word === message) {
      addPoints(socket.id);
      superBroadcast(events.newMsg, {
        message: `Winner is ${socket.username}, word was ${word}`,
        username: "Bot",
      });
    } else broadcast(events.newMsg, { message, username });
  });
  socket.on(events.beginPath, ({ x, y, size }) =>
    broadcast(events.beganPth, { x, y, size })
  );
  socket.on(events.strokePath, ({ x, y, color }) =>
    broadcast(events.strokenPath, { x, y, color })
  );
  socket.on(events.fill, ({ color }) => broadcast(events.filled, { color }));
  socket.on(events.erase, () => broadcast(events.erased));
  socket.on(events.setPencil, () => broadcast(events.setPenciled));
  socket.on(events.addPlayer, ({ username }) => {
    socket.username = username;
    sockets.push({ id: socket.id, points: 0, username });
    sendPlayerUpdate();
    setTimeout(startGame, 2000);
  });
  socket.on(events.disconnect, () => {
    endGame();
  });
  socket.on(events.refresh, ({ username }) => {
    sockets = sockets.map((aSocket) => {
      if (aSocket.username === username) {
        aSocket.username = username;
        aSocket.id = socket.id;
        socket.username = username;
      }
      return aSocket;
    });
  });
};
