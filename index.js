
const lightDarkMode = document.getElementById("light-dark-mode");
const modeFlip = document.getElementById("mode-flip");
const modeIcon = document.getElementById("mode-icon")

let isDarkMode = true;
let rotationInProgress = false;
let currentDegrees = 0;

lightDarkMode.addEventListener("click", flip);

function flip(){
    if(rotationInProgress) return;

    rotationInProgress = true;

    const targetDegrees = currentDegrees === 0 ? 180 : 0;
    const rotationDirection = currentDegrees === 0 ? 1 : -1;

    let timerId = setInterval(frame, 1);
    let degrees = currentDegrees;

    function frame(){
        if(degrees === targetDegrees){
            clearInterval(timerId);
            rotationInProgress = false;
            currentDegrees = targetDegrees;
            modeIcon.style.transform = `rotateY(${currentDegrees})`;
            return;
        }
        else{
            degrees += rotationDirection;
            modeFlip.style.transform = `rotateY(${degrees}deg)`;
        }
    }
}