import events from "./events";

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  socket.on(events.sendMsg, ({ message, username }) => {
    broadcast(events.newMsg, { message, username });
  });
  socket.on(events.beginPath, ({ x, y, size }) => {
    broadcast(events.beganPth, { x, y, size });
  });
  socket.on(events.strokePath, ({ x, y, color }) => {
    broadcast(events.strokenPath, { x, y, color });
  });
};
