document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    
    function updateCountdown() {
        const now = new Date();
        const newYear = new Date(now.getFullYear() + 1, 0, 1);
        const timeRemaining = newYear - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        if (days != 0 && hours != 0 && minutes != 0 && seconds != 0){
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
        const button = document.getElementById("button");
        const text = document.getElementById("text");
        if (/*days == 0 && hours == 0 && minutes == 0 &&*/ seconds == 0){
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`; 
            button.style.display = "inline-block";
            text.style.marginLeft = "200px";
            countdown.style.marginLeft = "200px";

        }
    }

    // Update every second
    setInterval(updateCountdown, 1000);

    // Initial call to set initial values
    updateCountdown();
});