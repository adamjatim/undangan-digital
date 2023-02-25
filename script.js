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

var audio = document.getElementById("myAudio");
audio.muted = false;

// Check if the audio is playing
if(audio.paused) {
    audio.play();
}

function showAudioPermissionPopup() {
    const popup = document.createElement('div');
    popup.innerHTML = 'Allow audio autoplay to listen to our content';
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.right = '20px';
    popup.style.backgroundColor = '#f5f5f5';
    popup.style.border = '1px solid #ccc';
    popup.style.padding = '10px';
    popup.style.zIndex = '9999';
    popup.onclick = () => {
      requestAudioPermission();
      popup.remove();
    };
    document.body.appendChild(popup);
  }
  
  async function requestAudioPermission() {
    try {
      const permissionStatus = await navigator.permissions.query({ name: 'autoplay' });
      if (permissionStatus.state === 'granted') {
        playAudio();
      } else if (permissionStatus.state === 'prompt') {
        const result = await permissionStatus.ask();
        if (result === 'granted') {
          playAudio();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  function playAudio() {
    const audio = new Audio('./src/audio/BarakaAllahuLakuma.mp3');
    audio.autoplay = true;
    audio.loop = true;
    audio.controls = false;
    document.body.appendChild(audio);
  }
  
  showAudioPermissionPopup();