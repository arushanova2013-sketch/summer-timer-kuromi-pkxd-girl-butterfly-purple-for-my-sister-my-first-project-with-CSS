let cont = document.getElementById("timer");

let intervalId = setInterval(() => {
  let now = new Date();
  let target = new Date("2027-06-01T00:00:00");
  let diff = target.getTime() - now.getTime();

  if (diff < 0) {
    cont.textContent = "Лето уже наступило!";
    clearInterval(intervalId);
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  cont.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}, 1000);
