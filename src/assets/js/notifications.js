import { getSocket } from "./sockets";

const body = document.querySelector("body");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handleNewuser = ({ username }) => {
  const text = `${username} just joined!`;
  const color = "rgb(0, 122, 255)";

  fireNotification(text, color);
};
