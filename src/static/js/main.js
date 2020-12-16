(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");
var USERNAME = "username";

var appendMsg = function appendMsg(message, username) {
  var li = document.createElement("li");
  li.innerHTML = "\n  <span class=\"author ".concat(username ? "other" : "self", "\">").concat(username ? username : "You", ":</span> ").concat(message, "\n  ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(e) {
  e.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  var username = localStorage.getItem(USERNAME);
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value,
    username: username
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      username = _ref.username;
  appendMsg(message, username);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsIlVTRVJOQU1FIiwiYXBwZW5kTXNnIiwibWVzc2FnZSIsInVzZXJuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZU5ld01zZyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsSUFBTUUsUUFBUSxHQUFHLFVBQWpCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUN2QyxNQUFNQyxFQUFFLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxzQ0FDc0JILFFBQVEsR0FBRyxPQUFILEdBQWEsTUFEM0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxPQUhaO0FBS0FOLEVBQUFBLFFBQVEsQ0FBQ1csV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUdaLE9BQU8sQ0FBQ2EsYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRjJCLE1BR25CQyxLQUhtQixHQUdURixLQUhTLENBR25CRSxLQUhtQjtBQUkzQixNQUFJVixRQUFRLEdBQUdXLFlBQVksQ0FBQ0MsT0FBYixDQUFxQmYsUUFBckIsQ0FBZjtBQUNBLDRCQUFZZ0IsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNuQixPQUEvQixFQUF3QztBQUN0Q0csSUFBQUEsT0FBTyxFQUFFVyxLQUQ2QjtBQUV0Q1YsSUFBQUEsUUFBUSxFQUFSQTtBQUZzQyxHQUF4QztBQUlBUSxFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FaLEVBQUFBLFNBQVMsQ0FBQ1ksS0FBRCxDQUFUO0FBQ0QsQ0FYRDs7QUFhTyxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEyQjtBQUFBLE1BQXhCakIsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JERixFQUFBQSxTQUFTLENBQUNDLE9BQUQsRUFBVUMsUUFBVixDQUFUO0FBQ0QsQ0FGTTs7OztBQUlQLElBQUlKLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNxQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1osYUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7XG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XG5jb25zdCBVU0VSTkFNRSA9IFwidXNlcm5hbWVcIjtcblxuY29uc3QgYXBwZW5kTXNnID0gKG1lc3NhZ2UsIHVzZXJuYW1lKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgXG4gIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7dXNlcm5hbWUgPyBcIm90aGVyXCIgOiBcInNlbGZcIn1cIj4ke1xuICAgIHVzZXJuYW1lID8gdXNlcm5hbWUgOiBcIllvdVwiXG4gIH06PC9zcGFuPiAke21lc3NhZ2V9XG4gIGA7XG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICBsZXQgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVU0VSTkFNRSk7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7XG4gICAgbWVzc2FnZTogdmFsdWUsXG4gICAgdXNlcm5hbWUsXG4gIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TXNnID0gKHsgbWVzc2FnZSwgdXNlcm5hbWUgfSkgPT4ge1xuICBhcHBlbmRNc2cobWVzc2FnZSwgdXNlcm5hbWUpO1xufTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuIl19
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notifications");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWU3ODRkZDUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbiJdfQ==
},{"./chat":1,"./login":3,"./notifications":4,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var socket = io("/");
var logout = document.getElementById("jsLogOut");
var USERNAME = "username";
(0, _sockets.initSocket)(socket);

var handleLogout = function handleLogout() {
  localStorage.removeItem(USERNAME);
};

if (logout) {
  logout.addEventListener("click", handleLogout);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwibG9nb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlVTRVJOQU1FIiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFFQSx5QkFBV0wsTUFBWDs7QUFFQSxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxFQUFBQSxZQUFZLENBQUNDLFVBQWIsQ0FBd0JILFFBQXhCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJSCxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxDQUFDTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0gsWUFBakM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dPdXRcIik7XG5cbmNvbnN0IFVTRVJOQU1FID0gXCJ1c2VybmFtZVwiO1xuXG5pbml0U29ja2V0KHNvY2tldCk7XG5cbmNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVVNFUk5BTUUpO1xufTtcblxuaWYgKGxvZ291dCkge1xuICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUxvZ291dCk7XG59XG4iXX0=
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLogin = exports.handleNewuser = void 0;

var _sockets = require("./sockets");

var body = document.querySelector("body");
var USERANME = "username";

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var userNoti = function userNoti(username) {
  var text = "".concat(username, " just joined!");
  var color = "rgb(0, 122, 255)";
  fireNotification(text, color);
};

var handleNewuser = function handleNewuser(_ref) {
  var username = _ref.username;
  userNoti(username);
};

exports.handleNewuser = handleNewuser;

var handleLogin = function handleLogin(_ref2) {
  var username = _ref2.username;
  localStorage.setItem(USERANME, username);
  userNoti(username);
};

exports.handleLogin = handleLogin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlVTRVJBTk1FIiwiZmlyZU5vdGlmaWNhdGlvbiIsInRleHQiLCJjb2xvciIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwidXNlck5vdGkiLCJ1c2VybmFtZSIsImhhbmRsZU5ld3VzZXIiLCJoYW5kbGVMb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFVBQWpCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3hDLE1BQU1DLFlBQVksR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FaLEVBQUFBLElBQUksQ0FBQ2EsV0FBTCxDQUFpQk4sWUFBakI7QUFDRCxDQU5EOztBQVFBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBYztBQUM3QixNQUFNVixJQUFJLGFBQU1VLFFBQU4sa0JBQVY7QUFDQSxNQUFNVCxLQUFLLEdBQUcsa0JBQWQ7QUFFQUYsRUFBQUEsZ0JBQWdCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUFoQjtBQUNELENBTEQ7O0FBT08sSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZELFFBQWUsUUFBZkEsUUFBZTtBQUM3Q0QsRUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVI7QUFDRCxDQUZNOzs7O0FBSUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBa0I7QUFBQSxNQUFmRixRQUFlLFNBQWZBLFFBQWU7QUFDM0NHLEVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQmhCLFFBQXJCLEVBQStCWSxRQUEvQjtBQUNBRCxFQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IFVTRVJBTk1FID0gXCJ1c2VybmFtZVwiO1xuXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG5jb25zdCB1c2VyTm90aSA9ICh1c2VybmFtZSkgPT4ge1xuICBjb25zdCB0ZXh0ID0gYCR7dXNlcm5hbWV9IGp1c3Qgam9pbmVkIWA7XG4gIGNvbnN0IGNvbG9yID0gXCJyZ2IoMCwgMTIyLCAyNTUpXCI7XG5cbiAgZmlyZU5vdGlmaWNhdGlvbih0ZXh0LCBjb2xvcik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3dXNlciA9ICh7IHVzZXJuYW1lIH0pID0+IHtcbiAgdXNlck5vdGkodXNlcm5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvZ2luID0gKHsgdXNlcm5hbWUgfSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVU0VSQU5NRSwgdXNlcm5hbWUpO1xuICB1c2VyTm90aSh1c2VybmFtZSk7XG59O1xuIl19
},{"./sockets":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSetPenciled = exports.handleErased = exports.handleFilled = exports.handleStrokenPath = exports.handleBeganPth = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var boldRange = document.getElementById("jsRangePencil");
var mode = document.getElementById("jsMode");
var eraser = document.getElementById("jsEraser");
var eraserRange = document.getElementById("jsRangeEraser");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
var INITIAL_LINE_WIDTH = 2.5;
var painting = false;
var filling = false;
var erasing = false;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.lineWidth = INITIAL_LINE_WIDTH;
ctx.strokeStyle = INITIAL_COLOR;

var beginPath = function beginPath(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineWidth = size;
};

var strokePath = function strokePath(x, y, color) {
  var currentColor = ctx.strokeStyle;
  if (color !== null) currentColor = color;
  ctx.strokeStyle = currentColor;
  ctx.lineTo(x, y);
  ctx.stroke();
};

var handleMousemove = function handleMousemove(e) {
  var x = e.offsetX;
  var y = e.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y,
      size: ctx.lineWidth
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
};

var startPaint = function startPaint() {
  painting = true;
};

var stopPaint = function stopPaint() {
  painting = false;
};

var handleMouseDown = function handleMouseDown() {
  startPaint();
};

var handleMouseUp = function handleMouseUp() {
  stopPaint();
};

var handleMouseLeave = function handleMouseLeave() {
  stopPaint();
};

var setPencil = function setPencil() {
  erasing = false;
  ctx.globalCompositeOperation = "source-over";
  ctx.lineWidth = boldRange.value;
};

var handleClickColor = function handleClickColor(e) {
  var color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  setPencil();
  (0, _sockets.getSocket)().emit(window.events.setPencil);
};

var handleInputRangePencil = function handleInputRangePencil(e) {
  var size = e.target.value;
  ctx.lineWidth = size;
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;
  if (color !== null) currentColor = color;
  ctx.fillStyle = currentColor;
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

var handleClickFill = function handleClickFill() {
  if (filling && !erasing) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.strokeStyle
    });
  }
};

var handleClickMode = function handleClickMode() {
  if (!filling) {
    mode.innerHTML = "Paint";
    filling = true;
  } else {
    mode.innerHTML = "Fill";
    filling = false;
  }
};

var handleInputRangeEraser = function handleInputRangeEraser(e) {
  if (erasing) {
    var size = e.target.value;
    ctx.lineWidth = size;
  }
};

var erase = function erase() {
  // filling = false;
  erasing = true;
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = eraserRange.value;
};

var handleClickEraser = function handleClickEraser() {
  erase();
  (0, _sockets.getSocket)().emit(window.events.erase);
};

var handleBeganPth = function handleBeganPth(_ref) {
  var x = _ref.x,
      y = _ref.y,
      size = _ref.size;
  return beginPath(x, y, size);
};

exports.handleBeganPth = handleBeganPth;

var handleStrokenPath = function handleStrokenPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokenPath = handleStrokenPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var handleErased = function handleErased() {
  return erase();
};

exports.handleErased = handleErased;

var handleSetPenciled = function handleSetPenciled() {
  return setPencil();
};

exports.handleSetPenciled = handleSetPenciled;

if (canvas) {
  canvas.addEventListener("mousemove", handleMousemove);
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mouseleave", handleMouseLeave);
  canvas.addEventListener("click", handleClickFill);
  Array.from(colors).forEach(function (color) {
    return color.addEventListener("click", handleClickColor);
  });
  boldRange.addEventListener("input", handleInputRangePencil);
  mode.addEventListener("click", handleClickMode);
  eraser.addEventListener("click", handleClickEraser);
  eraserRange.addEventListener("input", handleInputRangeEraser);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImJvbGRSYW5nZSIsIm1vZGUiLCJlcmFzZXIiLCJlcmFzZXJSYW5nZSIsIklOSVRJQUxfQ09MT1IiLCJDQU5WQVNfU0laRSIsIklOSVRJQUxfTElORV9XSURUSCIsInBhaW50aW5nIiwiZmlsbGluZyIsImVyYXNpbmciLCJ3aWR0aCIsImhlaWdodCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwieCIsInkiLCJzaXplIiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImNvbG9yIiwiY3VycmVudENvbG9yIiwibGluZVRvIiwic3Ryb2tlIiwiaGFuZGxlTW91c2Vtb3ZlIiwiZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsInN0YXJ0UGFpbnQiLCJzdG9wUGFpbnQiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VMZWF2ZSIsInNldFBlbmNpbCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInZhbHVlIiwiaGFuZGxlQ2xpY2tDb2xvciIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbFN0eWxlIiwiaGFuZGxlSW5wdXRSYW5nZVBlbmNpbCIsImZpbGwiLCJmaWxsUmVjdCIsImhhbmRsZUNsaWNrRmlsbCIsImhhbmRsZUNsaWNrTW9kZSIsImlubmVySFRNTCIsImhhbmRsZUlucHV0UmFuZ2VFcmFzZXIiLCJlcmFzZSIsImhhbmRsZUNsaWNrRXJhc2VyIiwiaGFuZGxlQmVnYW5QdGgiLCJoYW5kbGVTdHJva2VuUGF0aCIsImhhbmRsZUZpbGxlZCIsImhhbmRsZUVyYXNlZCIsImhhbmRsZVNldFBlbmNpbGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIs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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5jb25zdCBib2xkUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmFuZ2VQZW5jaWxcIik7XG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XG5jb25zdCBlcmFzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRXJhc2VyXCIpO1xuY29uc3QgZXJhc2VyUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmFuZ2VFcmFzZXJcIik7XG5cbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcbmNvbnN0IENBTlZBU19TSVpFID0gNzAwO1xuY29uc3QgSU5JVElBTF9MSU5FX1dJRFRIID0gMi41O1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBmaWxsaW5nID0gZmFsc2U7XG5sZXQgZXJhc2luZyA9IGZhbHNlO1xuXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcblxuY3R4LmxpbmVXaWR0aCA9IElOSVRJQUxfTElORV9XSURUSDtcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5cbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5LCBzaXplKSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgY3R4LmxpbmVXaWR0aCA9IHNpemU7XG59O1xuXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkgY3VycmVudENvbG9yID0gY29sb3I7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjtcblxuICBjdHgubGluZVRvKHgsIHkpO1xuICBjdHguc3Ryb2tlKCk7XG59O1xuXG5jb25zdCBoYW5kbGVNb3VzZW1vdmUgPSAoZSkgPT4ge1xuICBjb25zdCB4ID0gZS5vZmZzZXRYO1xuICBjb25zdCB5ID0gZS5vZmZzZXRZO1xuXG4gIGlmICghcGFpbnRpbmcpIHtcbiAgICBiZWdpblBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5LCBzaXplOiBjdHgubGluZVdpZHRoIH0pO1xuICB9IGVsc2Uge1xuICAgIHN0cm9rZVBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY29sb3I6IGN0eC5zdHJva2VTdHlsZSxcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnRQYWludCA9ICgpID0+IHtcbiAgcGFpbnRpbmcgPSB0cnVlO1xufTtcblxuY29uc3Qgc3RvcFBhaW50ID0gKCkgPT4ge1xuICBwYWludGluZyA9IGZhbHNlO1xufTtcblxuY29uc3QgaGFuZGxlTW91c2VEb3duID0gKCkgPT4ge1xuICBzdGFydFBhaW50KCk7XG59O1xuXG5jb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICBzdG9wUGFpbnQoKTtcbn07XG5cbmNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gIHN0b3BQYWludCgpO1xufTtcblxuY29uc3Qgc2V0UGVuY2lsID0gKCkgPT4ge1xuICBlcmFzaW5nID0gZmFsc2U7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCI7XG4gIGN0eC5saW5lV2lkdGggPSBib2xkUmFuZ2UudmFsdWU7XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja0NvbG9yID0gKGUpID0+IHtcbiAgY29uc3QgY29sb3IgPSBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHNldFBlbmNpbCgpO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2V0UGVuY2lsKTtcbn07XG5cbmNvbnN0IGhhbmRsZUlucHV0UmFuZ2VQZW5jaWwgPSAoZSkgPT4ge1xuICBjb25zdCBzaXplID0gZS50YXJnZXQudmFsdWU7XG4gIGN0eC5saW5lV2lkdGggPSBzaXplO1xufTtcblxuY29uc3QgZmlsbCA9IChjb2xvciA9IG51bGwpID0+IHtcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkgY3VycmVudENvbG9yID0gY29sb3I7XG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xufTtcblxuY29uc3QgaGFuZGxlQ2xpY2tGaWxsID0gKCkgPT4ge1xuICBpZiAoZmlsbGluZyAmJiAhZXJhc2luZykge1xuICAgIGZpbGwoKTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuZmlsbCwgeyBjb2xvcjogY3R4LnN0cm9rZVN0eWxlIH0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja01vZGUgPSAoKSA9PiB7XG4gIGlmICghZmlsbGluZykge1xuICAgIG1vZGUuaW5uZXJIVE1MID0gXCJQYWludFwiO1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZGUuaW5uZXJIVE1MID0gXCJGaWxsXCI7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVJbnB1dFJhbmdlRXJhc2VyID0gKGUpID0+IHtcbiAgaWYgKGVyYXNpbmcpIHtcbiAgICBjb25zdCBzaXplID0gZS50YXJnZXQudmFsdWU7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHNpemU7XG4gIH1cbn07XG5cbmNvbnN0IGVyYXNlID0gKCkgPT4ge1xuICAvLyBmaWxsaW5nID0gZmFsc2U7XG4gIGVyYXNpbmcgPSB0cnVlO1xuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1vdXRcIjtcbiAgY3R4LmxpbmVXaWR0aCA9IGVyYXNlclJhbmdlLnZhbHVlO1xufTtcblxuY29uc3QgaGFuZGxlQ2xpY2tFcmFzZXIgPSAoKSA9PiB7XG4gIGVyYXNlKCk7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5lcmFzZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QdGggPSAoeyB4LCB5LCBzaXplIH0pID0+IGJlZ2luUGF0aCh4LCB5LCBzaXplKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VuUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yIH0pID0+IGZpbGwoY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUVyYXNlZCA9ICgpID0+IGVyYXNlKCk7XG5leHBvcnQgY29uc3QgaGFuZGxlU2V0UGVuY2lsZWQgPSAoKSA9PiBzZXRQZW5jaWwoKTtcblxuaWYgKGNhbnZhcykge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZW1vdmUpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVNb3VzZUxlYXZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja0ZpbGwpO1xuXG4gIEFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT5cbiAgICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tDb2xvcilcbiAgKTtcblxuICBib2xkUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0UmFuZ2VQZW5jaWwpO1xuICBtb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja01vZGUpO1xuICBlcmFzZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrRXJhc2VyKTtcbiAgZXJhc2VyUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0UmFuZ2VFcmFzZXIpO1xufVxuIl19
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.login, _notifications.handleLogin);
  socket.on(events.newUser, _notifications.handleNewuser);
  socket.on(events.newMsg, _chat.handleNewMsg);
  socket.on(events.beganPth, _paint.handleBeganPth);
  socket.on(events.strokenPath, _paint.handleStrokenPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.erased, _paint.handleErased);
  socket.on(events.setPenciled, _paint.handleSetPenciled);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldCIsImFTb2NrZXQiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsImxvZ2luIiwiaGFuZGxlTG9naW4iLCJuZXdVc2VyIiwiaGFuZGxlTmV3dXNlciIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUHRoIiwiaGFuZGxlQmVnYW5QdGgiLCJzdHJva2VuUGF0aCIsImhhbmRsZVN0cm9rZW5QYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwiZXJhc2VkIiwiaGFuZGxlRXJhc2VkIiwic2V0UGVuY2lsZWQiLCJoYW5kbGVTZXRQZW5jaWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQVFBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsZ0JBQ2xCQyxNQURrQjtBQUFBLE1BQzdCQyxNQUQ2QixXQUM3QkEsTUFENkI7QUFFckNMLEVBQUFBLE1BQU0sR0FBR0csT0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxLQUFqQixFQUF3QkMsMEJBQXhCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNJLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVYsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ00sTUFBakIsRUFBeUJDLGtCQUF6QjtBQUNBWixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDUSxRQUFqQixFQUEyQkMscUJBQTNCO0FBQ0FkLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNVLFdBQWpCLEVBQThCQyx3QkFBOUI7QUFDQWhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNZLE1BQWpCLEVBQXlCQyxtQkFBekI7QUFDQWxCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNjLE1BQWpCLEVBQXlCQyxtQkFBekI7QUFDQXBCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNnQixXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0QsQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld01zZyB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZUxvZ2luLCBoYW5kbGVOZXd1c2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHtcbiAgaGFuZGxlQmVnYW5QdGgsXG4gIGhhbmRsZUVyYXNlZCxcbiAgaGFuZGxlRmlsbGVkLFxuICBoYW5kbGVTZXRQZW5jaWxlZCxcbiAgaGFuZGxlU3Ryb2tlblBhdGgsXG59IGZyb20gXCIuL3BhaW50XCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldCA9IChhU29ja2V0KSA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG4gIHNvY2tldCA9IGFTb2NrZXQ7XG4gIHNvY2tldC5vbihldmVudHMubG9naW4sIGhhbmRsZUxvZ2luKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXd1c2VyKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01zZyk7XG4gIHNvY2tldC5vbihldmVudHMuYmVnYW5QdGgsIGhhbmRsZUJlZ2FuUHRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VuUGF0aCwgaGFuZGxlU3Ryb2tlblBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5lcmFzZWQsIGhhbmRsZUVyYXNlZCk7XG4gIHNvY2tldC5vbihldmVudHMuc2V0UGVuY2lsZWQsIGhhbmRsZVNldFBlbmNpbGVkKTtcbn07XG4iXX0=
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])