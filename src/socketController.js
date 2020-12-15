import events from "./events";

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  socket.on(events.sendMsg, ({ message, username }) => {
    broadcast(events.newMsg, { message, username });
  });
};
