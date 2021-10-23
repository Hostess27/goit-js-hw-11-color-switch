const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
];

const startBtn = document.querySelector('button[data-action="start"');
const stopBtn = document.querySelector('button[data-action="stop"');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
const newColor = () => {
    startBtn.setAttribute("disabled", "");
    stopBtn.removeAttribute("disabled");
    intervalId = setInterval(() => {
        body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length + 1)];
    }, 1000);
};

const clearColors = () => {
    clearInterval(intervalId);
    startBtn.setAttribute("disabled", "");
    stopBtn.removeAttribute("disabled");
    А;
};

startBtn.addEventListener("click", newColor);
stopBtn.addEventListener("click", clearColors);
