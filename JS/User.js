
const Form = document.querySelector('.user');
const F_I = Form.querySelector('input');
const F_B = Form.querySelector('button');
const F_H = document.querySelector('.UN');

const US = 'USERNAME'; 

function MKH(FIV){
    F_H.innerText = `Hello! ${FIV}`;
    Form.style.display = 'none';
}

function C_F_B(e){
    e.preventDefault();
    const F_I_V = F_I.value;
    localStorage.setItem(US, F_I_V);
    MKH(F_I_V);
    F_I.value = '';
}

const PullLocal = localStorage.getItem(US);
if(PullLocal){
    MKH(PullLocal);
}

F_B.addEventListener('click', C_F_B);
