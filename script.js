let a = '' //первое число
let b = '' //второе число
let sign = '' //знак математической операции ( / , X , - , + , =)
let finish = false
out.textContent = 0

const digit = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8'  , '9' , '.']
const action = ['-' , '+' , 'X' , '/']

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

document.querySelector('.buttons').onclick = (event) => {   //реализация нажатия на кнопку
    if(!event.target.classList.contains('btn')) return //для безошибочного определения кнопки( чтобы при нажатии в промежуток между кнопками ничего не происходило)
    if(event.target.classList.contains('ac')) return   //нажата кнопка clearAll

    out.textContent = ''
    //получение нажатой кнопки
    const key = event.target.textContent //считывание значения с нажатой кнопки btn и присваивание константе ее значения
     //если нажта кнопка 0-9
    if (digit.includes(key)) {
    }
}

