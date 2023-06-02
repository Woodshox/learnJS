/*
let result = prompt("Какое «официальное» название JavaScript?");

if (result == "ECMAScript") {
    alert("Верно");
} else {
    alert("Не верно");
}
*/

/*
let result = prompt("Введите число любое число");

if (result == 0) {
    alert("0");
} else if (result <0) {
    alert("-1");
} else {
    alert(1)
}
*/

/*
let a = 1;
let b = 2;
let result = (a + b < 4) ? 'мало' : 'много';
alert(result); 
*/

let login = prompt("введите логин")
let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' : '';
alert(message);

