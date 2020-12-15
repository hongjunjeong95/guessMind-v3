import { initSocket } from "./sockets";

const socket = io("/");
const logout = document.getElementById("jsLogOut");

const USERNAME = "username";

initSocket(socket);

const handleLogout = () => {
  localStorage.removeItem(USERNAME);
};

if (logout) {
  logout.addEventListener("click", handleLogout);
}
