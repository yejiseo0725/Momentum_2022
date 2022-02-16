const clockTitle = document.querySelector(".js-clock");

function ChristmasEveTimer() {
  const xmasDate = new Date("2022-12-24:00:00:00+0900");
  const nowDate = new Date();
  const gapDate = xmasDate - nowDate;
  const days = Math.floor(gapDate / (1000 * 60 * 60 * 24)); //일
  const hours = Math.floor((gapDate / (1000 * 60 * 60)) % 24); //시
  const minutes = Math.floor(((gapDate / 1000) * 60) % 60); //분
  const seconds = Math.floor((gapDate / 1000) % 60); //초

  clockTitle.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

ChristmasEveTimer();
setInterval(ChristmasEveTimer, 1000);
