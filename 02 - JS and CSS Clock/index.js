

function setTime() {
    let time = new Date();
    const hour = time.getHours();
    const secs = time.getSeconds();
    const mins = time.getMinutes();
    document.querySelector('.hour-hand').style.transform=`rotate(${(360*(hour/2))}deg)`;
    document.querySelector('.min-hand').style.transform=`rotate(${(360*(mins/60))}deg)`;
    document.querySelector('.second-hand').style.transform=`rotate(${(360*(secs/60))}deg)`;
}



window.addEventListener('DOMContentLoaded', () => {
   setTime();
});

setInterval(setTime, 1000);
