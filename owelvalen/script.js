// Countdown Timer
function updateCountdown() {
    const valentineDate = new Date(new Date().getFullYear(), 1, 14); // February 14
    const now = new Date();
    const diff = valentineDate - now;
  
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      document.getElementById('countdown').textContent = 'Happy Valentine\'s Day! 💖';
    }
  }
  
  setInterval(updateCountdown, 1000);
  