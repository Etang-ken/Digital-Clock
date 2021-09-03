

const tick = () =>{
    const dates = new Date();

document.querySelector('.hour').textContent = dates.getHours() + ' :';
document.querySelector('.minute').textContent = dates.getMinutes() + ' :';

document.querySelector('.second').textContent = dates.getSeconds();
};

setInterval(tick, 1000);