import { initSocket } from "./sockets";

const socket = io("/");

initSocket(socket);
