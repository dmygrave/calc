let a = '' //первое число
let b = '' //второе число
let sign = '' //знак математической операции ( / , X , - , + , =)
let finish = false

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
     //определяем, содержит ли массив нужный элемент (0-9)
    if (digit.includes(key)) {
       if (b === '' && sign === '') { //если переменная b равна пустой строке и знак тоже
       a += key
       out.textContent = a
       }
       else if (a!== '' && b!=='' && finish) {//если переменная a НЕравна пустой строке и b тоже, 
       
       } else {
           b += key
           out.textContent = a
       } 
       console.log(a , b, sign)
       return;
    }

     // аналогично, только знак математической операции ('-' , '+' , 'X' , '/')
    if(action.includes(key)){
        sign += key
        out.textContent = sign
        console.log(a, b, sign)
        return;
    }

    //нажатие кнопки "="
    if (key === '=') {
        switch (sign) { //сравнимаем значение sign
            case "+":
                a = (+a) + (+b)
                break;
            case "-":
                a = a - b
                break;
            case "X":
                a = a * b
                break;
            case "/":
                a = a / b
                break;

        }
        finish = true
        out.textContent = a
        console.log(a, b, sign)
    }
}
