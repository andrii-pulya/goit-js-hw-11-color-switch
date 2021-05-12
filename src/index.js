const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
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

console.log(refs.stopBtn);


const startColorChange = setInterval(
    () => {
        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const changeColor = randomIntegerFromInterval(0, colors.length);
        refs.body.style.backgroundColor = colors[changeColor];
        refs.startBtn.disabled = true;
    }
    , 1000);

const stopColorChange = () => {
    clearInterval(startColorChange);
    refs.stopBtn.disabled = false;
};