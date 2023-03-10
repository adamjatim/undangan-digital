(function date() {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let today = new Date(),
        dayToday = String(today.getDay()).padStart(2, "0"), // giving 0 number if is below 10
        dayMonth = String(today.getMonth() + 1).padStart(2, "0"),
        dayYear = today.getFullYear(),
        inputDate = new Date("02/20/2024"); // MM/DD/YYYY

    today = dayMonth + "/" + dayToday + "/" + dayYear;
    const countDown = new Date(inputDate).getTime(),
        x = setInterval(function() {
            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("date-days").innerText = Math.floor(distance / (day)),
            document.getElementById("date-hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("date-minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("date-seconds").innerText = Math.floor((distance % (minute)) / second);
            //seconds
        }, 0)
}());

const audio = document.getElementById('my-audio');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

function playAudio() {
  audio.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline';
}

function pauseAudio() {
  audio.pause();
  playButton.style.display = 'inline';
  pauseButton.style.display = 'none';
}

audio.addEventListener('ended', function() {
  pauseAudio();
});