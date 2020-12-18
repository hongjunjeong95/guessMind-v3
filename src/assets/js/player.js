import { hideChat, showChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  showControls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notify = document.getElementById("jsNotify");

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
