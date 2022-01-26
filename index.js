"use strict";

let repeat = () => alert("Введите корректные данные");

let userSurname = prompt("Ваша фамилия?");
while (!isNaN(userSurname)) {
  if (!isNaN(userSurname)) {
    repeat();
  }
  userSurname = prompt("Ваша фамилия?");
}

let userName = prompt("Ваше имя?");
while (!isNaN(userName)) {
  if (!isNaN(userName)) {
    repeat();
  }
  userName = prompt("Ваше имя?");
}

let userPatronymic = prompt("Ваше отчество?");
while (!isNaN(userPatronymic)) {
  if (!isNaN(userPatronymic)) {
    repeat();
  }
  userPatronymic = prompt("Ваше отчество?");
}

let age = prompt("Ваш возраст?");
while (!Number(age)) {
  if (!Number(age)) {
    repeat();
  }
  age = prompt("Ваш возраст?");
}

let ageDays = age * 365;
let age5years = +age + 5;

const MenPension = 65;
const WomenPension = 55;

let yourGender = confirm("Ваш пол - мужской?");
let gender = yourGender ? "мужской" : "женский";

let pension;

if (
  (age >= MenPension && gender === "мужской") ||
  (age >= WomenPension && gender === "женский")
) {
  pension = "да";
} else {
  pension = "нет";
}

alert(` 
  Ваше ФИО: ${userSurname}  ${userName}  ${userPatronymic}
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
