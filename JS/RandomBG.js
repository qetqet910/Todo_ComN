
const Body = document.querySelector('.body');
const BGAr = ['BG1', 'BG2', 'BG3', 'BG4', 'BG5', 'BG6', 'BG7'];
const Ran = Math.floor(Math.random() * BGAr.length);

Body.style.backgroundImage = `url(Img/BG/${BGAr[Ran]}.jpg)`;