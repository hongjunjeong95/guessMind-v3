import { timeout } from "./player";
import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");
const USERNAME = "username";

const appendMsg = (message, username) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <span class="author ${username ? "other" : "self"}">${
    username ? username : "You"
  }:</span> ${message}
  `;
  messages.appendChild(li);
};

const handleSendMsg = (e) => {
  e.preventDefault();
  clearTimeout(timeout);
  const input = sendMsg.querySelector("input");
  const { value } = input;
  let username = localStorage.getItem(USERNAME);
  getSocket().emit(window.events.sendMsg, {
    message: value,
    username,
  });
  input.value = "";
  appendMsg(value);
};

export const handleNewMsg = ({ message, username }) => {
  appendMsg(message, username);
};
export const hideChat = () => (sendMsg.style.display = "none");
export const showChat = () => (sendMsg.style.display = "flex");

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
