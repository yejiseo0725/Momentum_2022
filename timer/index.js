const clockTitle = document.querySelector(".js-clock");

function newYearTimer() {
  const newYearDate = new Date("2023-01-01:00:00:00+0900");
  const nowDate = new Date();
  const gapDate = newYearDate - nowDate;
  const days = Math.floor(gapDate / (1000 * 60 * 60 * 24)); //일
  const hours = Math.floor((gapDate / (1000 * 60 * 60)) % 24); //시
  const minutes = Math.floor(((gapDate / 1000) * 60) % 60); //분
  const seconds = Math.floor((gapDate / 1000) % 60); //초

  clockTitle.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

newYearTimer();
setInterval(newYearTimer, 1000);
