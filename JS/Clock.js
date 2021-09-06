
const clock = document.querySelector('.HMS');

function C(e){
    const D = new Date();
    const H = String(D.getHours()).padStart('2', 0);
    const M = String(D.getMinutes()).padStart('2', 0);
    const S = String(D.getSeconds()).padStart('2', 0);

    clock.innerText = `${H}:${M}:${S}`
}

C();

setInterval((e) => {
    C()
}, 1000);
