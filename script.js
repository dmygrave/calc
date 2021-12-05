let a = '' //первое число
let b = '' //второе число
let sign = '' //знак математической операции ( / , X , - , + , =)
let finish = false

const digit = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8'  , '9' , '.']
const action = ['-' , '+' , 'x' , '/']

// экран выводимых значений

const out = document.querySelector('.calc-screen p')

//функция для очистки переменных 
function clearAll () {
    a = '' 
    b = ''
    sign = ''
    finish = 'false'
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll
