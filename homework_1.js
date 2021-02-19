'use strict';

//Класна робота

 /*1.Додати 2 скрипта на сторінку (напряму в тегу script та підключіть джс
фаїл) , у кожному з скриптів виведіть алерт з хеллов ворлд текстом.*/
function task01() {
    let greeting = 'Hello World!'
    alert(greeting)
}

/*2. Додати 2 повідомлення “Я люблю фронтенд” та “Я люблю JS”*/
function task02() {
    alert('Я люблю frontend')
    alert('Я люблю JS')
}
/*3. Оголошуємо змінні: admin и name. Запишіть в name Ваше імя.В admin
запишіть – undefined. Переприсвойте name в admin. Введіть admin . Що буде?*/
function task03() {
    let admin = undefined;
    let name = 'Julie';
    admin = name;
    alert(admin);
}
/*4. Запитати в юзера його імя, додати до імені – “Батькович” та вивести його на екран*/

function task04() {
    let userName = prompt('Як тебе звати?');
    alert(`Мене звати ${userName} Батькович.`)
}
/*5. Undefined, e is not defined. Спробуємо вивести оголошену але неприсвоєну змінну.*/
function task05() {
    let e;
    alert(e);
}

//Домашня робота

/*1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!»*/
function task1() {
    let uName = prompt('Скільки тобі років?')
    alert(`Привіт мені ${uName} років!`)
}
 /*2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу.
 Виведемо скільки йому років.*/
function task2() {
    const year = 2021;
    let userBirthYear = prompt('Якого ти року народження?')
    alert(`Мені ${year - userBirthYear} років.`);
}
/*3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.*/

function task3() {
    let sideA = prompt('Довжина сторони А прямокутника:')
    let sideB = prompt('Довжина сторони В прямокутника:')

    alert(`Периметр прямокутника: ${2*(+sideA + +sideB)}.`);
}
/*4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)*/

function task4() {
    let userRadius = prompt('Який радіус кола?')
    let radiusCount = Math.pow(userRadius, 2);
    let resultRadius = Math.PI * radiusCount;
    alert(`Площа кола ${resultRadius} сантиметри.`)
}

 /*5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще
 йому необхідно часу їхати, та виведіть відстань.*/

function task5() {
    const middleSpeed = 50;
    let userSpeed = prompt('Скільки Вам потрібно часу їхати?(в годинах)');
    let userDestination = middleSpeed * userSpeed;
    alert(`Вам ще їхати: ${userDestination} кілометрів.`)
}
/*6. Реалізуємо конвертер кілометрів в милі і навпаки =)*/

function task6() {
    let kilometerCount = prompt('Введіть кількість кілометрів:')
    let kilometerConverter = kilometerCount * 0.621371;
    alert(`Це ${kilometerConverter} миль.`);

    let milesCount = prompt('Введіть кількість миль:')
    let milesConverter = milesCount * 1.60934;
    alert(`Це ${milesConverter} кілометрів.`)
}
/*7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо
скільки бензину він може купити та скільки грошей у нього залишиться.*/

function task7() {
    let userCard = prompt('Скільки грошей на Вашій картці?')
    let userOil = prompt('Яка ціна одного літра бензину?')
    let oilCounter = Math.floor(+userCard / +userOil)
    let changeFromOil = +userCard - (+userOil * +oilCounter)
    alert(`Ви можете купити ${+oilCounter} літрів бензину. А ось скільки грошей у Вас залишиться: ${+changeFromOil} гривень.`)
}

