import { getSocket } from "./sockets";

const body = document.querySelector("body");
const USERANME = "username";

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

const userNoti = (username) => {
  const text = `${username} just joined!`;
  const color = "rgb(0, 122, 255)";

  fireNotification(text, color);
};

export const handleNewuser = ({ username }) => {
  userNoti(username);
};

export const handleLogin = ({ username }) => {
  localStorage.setItem(USERANME, username);
  userNoti(username);
  getSocket().emit(window.events.addPlayer, { username });
};
