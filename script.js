`use strict`;

let userAge;

do {
    userAge = +prompt(`Укажите возраст`);
} while (!(!(userAge < 0) && (!isNaN(userAge))));

switch (typeof userAge === `number`) {
    case userAge % 10 === 1:
        alert(`Ваш возраст: ${userAge} год`);
        break;
    case userAge % 10 >= 5 || userAge % 10 === 0:
        alert(`Ваш возраст: ${userAge} лет`);
        break;
    case userAge % 10 <= 4:
        alert(`Ваш возраст: ${userAge} года`);
        break;
}