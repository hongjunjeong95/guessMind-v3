import events from "./events";

import { chooseWord } from "./words";

export let sockets = [];

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });
  const choosePainter = () =>
    sockets[Math.floor(Math.random() * sockets.length)];
  const startGame = () => {
    // painter select
    if (sockets.length > 1) {
      superBroadcast(events.gameStarted);
      const painter = choosePainter();
      const word = chooseWord();
      io.to(painter.id).emit(events.painterNotif, { word });
      // time out
    }
  };

  socket.on(events.sendMsg, ({ message, username }) =>
    broadcast(events.newMsg, { message, username })
  );
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
};
