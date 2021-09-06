
window.onload = function(){

    const Form = document.querySelector('.input form');
    const Form_I = Form.querySelector('input');
    const Form_B = Form.querySelector('button');
    const Container = document.querySelector('.container');
    
    let Value = [];
    const User = "Todos"

    function MTag(Todo_V){   
        const TodoLi = document.createElement('li');
        TodoLi.classList.add('Todo_li');

        const TodoBtn = document.createElement('button');
        TodoBtn.classList.add('Todo_btn');
        TodoBtn.innerHTML = '<i style="pointer-events: none;" class="fas fa-trash"></i>'
        TodoLi.appendChild(TodoBtn);

        const TodoDes = document.createElement('span');
        TodoDes.classList.add('Todo_des');
        TodoDes.innerText = Todo_V;
        TodoLi.appendChild(TodoDes);

        Form_I.value = '';
        TodoBtn.addEventListener('click', DeleteFunc);
        Container.append(TodoLi);
    }

/////////////////////////////////////////////////////////

    function MianFunc(e){
        e.preventDefault();
        const NewTodo = Form_I.value;
        if(NewTodo){
            MTag(NewTodo)
            PushData(NewTodo);
        }
    }

/////////////////////////////////////////////////////////

    function PushData(Todo_V){
        Value.push(Todo_V);
        localStorage.setItem(User, JSON.stringify(Value));
    }

    function RemoveData(sv, si){
        if(Value[si] == sv){
            Value.splice(si, 1);
            localStorage.setItem(User, JSON.stringify(Value));
        }
    }

    function DeleteFunc(e){
        const D_Target = e.target.parentNode;
        D_Target.remove();
        const SV = String(e.target.parentNode.innerText);
        const SI = Value.indexOf(SV);
        RemoveData(SV, SI);
    }

    const Islocal = localStorage.getItem(User);
    if(Islocal){
        const LV = JSON.parse(Islocal);
        Value = LV;
        LV.forEach((e) => {
            MTag(e);
        });
    }
    Form_B.addEventListener('click', MianFunc);
}

