// event: on 으로 시작하는 것들

const title = document.querySelector("h1");

const superEventHandler = {
  enter: function handleMouseEnter() {
    title.style.color = "#3498db";
    title.innerText = "The mouse is here!";
  },

  leave: function handleMouseLeave() {
    title.style.color = "#9b59b6";
    title.innerText = "The mouse is gone!";
  },

  resize: function handleResize() {
    title.style.color = "#f39c12";
    title.innerText = "You just resized!";
  },

  click: function handleContextmenu() {
    title.style.color = "#1abc9c";
    title.innerText = "That was a right click!";
  },
};

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleResize);
window.addEventListener("contextmenu", handleContextmenu);
// JS 에게 어떤 event 를 listen 하고 싶은지 알려주기
// 1) 어떤 event 인지 명확히 하기 2) 그 때 어떤 함수 실행시킬지 명시하기
// 인자의 함수는, 내가 click 했을 때 JS 가 대신 그 함수를 실행시키기 위해
