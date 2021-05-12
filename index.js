const INTERVAL = 1000;

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);
let onBtnClick;

const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
};
  
function startColorChange() {
  refs.startBtn.disabled = true;
  onBtnClick = setInterval(() => {
      const changeColor = randomIntegerFromInterval(1, colors.length);
      refs.body.style.backgroundColor = colors[changeColor-1];
  }
  , INTERVAL);
};

function stopColorChange() {
    clearInterval(onBtnClick);
    refs.startBtn.disabled = false;
};