"use strict";

let userSurname = prompt("Ваша фамилия?");
let userName = prompt("Ваше имя?");
let userPatronymic = prompt("Ваше отчество?");
let age = prompt("Ваш возраст?");
let yourGender = confirm("Ваш пол - мужской?");
const menPension = 65;
const womenPension = 55;
let ageDays = age * 365;
let age5years = +age + 5;
let gender = yourGender ? "мужской" : "женский";
let pension;

if ((age >= 65 && yourGender) || (age >= 55 && (yourGender = false))) {
  pension = "да";
} else {
  pension = "нет";
}

alert(` Ваше ФИО: ${userSurname}  ${userName}  ${userPatronymic}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${ageDays}
Через 5 лет вам будет: ${age5years}
Ваш пол: ${gender}
Вы на пенсии: ${pension}
`);

// Спросить у пользователя строку и посчитать количество русских гласных букв, отобразить через alert();
let str = prompt("Введите строку");
let len = str.match(/[аоэиуыеёюя]/gim).length;
alert(len);
