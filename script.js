//your JS code here. If required.
 function updateClock() {
      const now = new Date();
      const formatted = now.toLocaleString(); // full date and time
      document.getElementById('timer').textContent = formatted;
    }

    // Initial call to show time immediately
    updateClock();

    // Update every second
    setInterval(updateClock, 1000);