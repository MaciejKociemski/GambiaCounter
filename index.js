document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date();
    const targetDate = new Date("2023-12-22T13:50:00");

    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  function animateCountdown() {
    const countdown = document.getElementById("countdown");
    countdown.style.animation = "bounce 1s infinite alternate";
  }

  function startCountdown() {
    updateCountdown();
    animateCountdown();

    setInterval(function () {
      updateCountdown();
    }, 1000);
  }

  startCountdown();
});
