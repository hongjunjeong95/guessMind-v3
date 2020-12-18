import { hideChat, showChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showControls,
} from "./paint";
import { getSocket } from "./sockets";

const board = document.getElementById("jsPBoard");
const notify = document.getElementById("jsNotify");

const USERNAME = "username";

export let timeout = null;

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.username}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handlePainterNotif = ({ word }) => {
  notify.innerText = `You are the painter, word: ${word}`;
  enableCanvas();
  showControls();
  hideChat();
};
export const handleGameStarted = () => {
  notify.innerText = "";
  disableCanvas();
  hideControls();
  showChat();
};

export const handleGameEnded = () => {
  resetCanvas();
  setInterval(handleRefresh, 1000);
};

const handleRefresh = () => {
  let username = localStorage.getItem(USERNAME);
  getSocket().emit(window.events.refresh, { username });
};

timeout = setInterval(handleRefresh, 1000);
