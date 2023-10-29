//Dom Elments-----------------------------------------------//

const input = document.querySelector('.input-todo');
const button = document.querySelector('.add-button');
const ul = document.querySelector('.ul-todo');
const cleanbutton = document.querySelector('.btn-cleanall');
let li;

//Functions-----------------------------------------------//

const createli = (inputvaleu) =>{
    li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = inputvaleu;
    clearinput();
    createdeletebutton();
};

const createdeletebutton = () =>{
    const buttondelete = document.createElement('button')
    buttondelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
    buttondelete.setAttribute('class','btn-delete');
    li.appendChild(buttondelete);
}

const clearinput  = () =>{
    input.value = ''
};

//Eventlistener-----------------------------------------------//

button.addEventListener('click',()=>{
    if(input.value !== ''){
        createli(input.value)
    }else{
        alert('Adicione sua tarefa')
    }
});

input.addEventListener('keydown',(event)=>{
    if(event.keyCode === 13 && input.value !== ''){
        createli(input.value)
    }
})

ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('ok');
    }else if(event.target.classList.contains('btn-delete')){
        event.target.parentElement.remove()
    }
});

cleanbutton.addEventListener('click',()=>{
    const ularray = Array.from(ul.children)
    const ulmap = ularray.map(item=>{
        return item.remove()
    })  
});