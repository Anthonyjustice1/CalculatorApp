const numbers = document.querySelectorAll('#num');
const clear = document.querySelector('#clear');
const dele = document.querySelector('#del');
const equal = document.querySelector('.equal')
const display = document.querySelector('#display')

numbers.forEach(num => {
    num.addEventListener('click', (e)=> {
        display.value += e.target.value
    })
})

clear.addEventListener('click', ()=> {
    display.value = ""
})

dele.addEventListener('click', ()=> {
    display.value = display.value.toString().slice(0, -1);
})

equal.addEventListener('click', ()=>{
    display.value = eval(display.value)
})
