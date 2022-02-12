/* АНКЕТА
Спросить у пользователя:
Фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt)
Возраст в годах (оператором prompt)
Пол (оператором confirm, например, “Ваш пол - мужской?”)
Вывести оператором alert анкету пользователя по примеру:
Ваше ФИО:
Ваш возраст в годах:
Ваш возраст в днях:
Через 5 лет вам будет:
Ваш пол:
Вы на пенсии:
PS: (пенсионный возраст: Ж-55 / М-65)
Должна быть валидация для корректности вводимых данных (поле не пустое, возраст цифрой и т.д).
Оператор alert() должен использоваться ОДИН раз. */

const validation = (fieldName) => {
  let value;

  if (fieldName === "age") {
    value = +prompt(`Enter your ${fieldName}`);

    while (!value || !Number.isInteger(value)) {
      value = +prompt(`Enter your ${fieldName} again`);
    }
  } else {
    value = prompt(`Enter your ${fieldName}`);

    while (!value) {
      value = prompt(`Enter your ${fieldName} again`);
    }
  }

  return value;
};

const getGender = () => {
  return confirm("Are you man?") ? "man" : "woman";
};

const getPension = (gender, age) => {
  if ((gender === "man" && age >= 65) || (gender === "woman" && age >= 55)) {
    return "yes";
  } else {
    return "no";
  }
};

const showInfo = (username, surname, patronymic, age, gender, pension) => {
  alert(`ФИО: ${username} ${surname} ${patronymic}
  Ваш возрас в годах: ${age}
  Ваш возрас в днях: ${age * 365}
  Через 5 лет Вам будет: ${age + 5}
  Ваш пол: ${gender}
  Вы на пенсии: ${pension}`);
};

const init = () => {
  const username = validation("name");
  const surname = validation("surname");
  const patronymic = validation("patronymic");
  const age = validation("age");
  const gender = getGender();
  const pension = getPension(gender, age);

  showInfo(username, surname, patronymic, age, gender, pension);
};

init();
