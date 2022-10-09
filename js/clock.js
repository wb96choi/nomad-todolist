const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

// setInterval(sayHello, 5000); 5초마다 반복

// setTimeout(sayHello, 5000); 5초뒤

getClock();
setInterval(getClock, 1000);

