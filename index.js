// 1 завдання 
let drink = prompt('Введіть напой');

switch (drink) {
  case "Кава":
    console.log("Ви обрали каву");
    break;
  case "Чай":
    console.log("Ви обрали чай");
    break;
  case "Сік":
    console.log("Ви обрали сік");
    break;
  default:
    console.log("Такого напою немає");
}


// 2 завдання

let day = prompt('Введіть день тижня');

if (
  day === "понеділок" ||
  day === "вівторок" ||
  day === "середа" ||
  day === "четвер" ||
  day === "п’ятниця"
) {
  console.log("Це робочий день");
} else if (day === "субота" || day === "неділя") {
  console.log("Це вихідний день");
} else {
  console.log("Невірний день тижня");
}



// 3 завдання 

let month = prompt('Введіть номер місяця');

if (month === 12 || month === 1 || month === 2) {
  console.log("Зима");
} else if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Літо");
} else if (month >= 9 && month <= 11) {
  console.log("Осінь");
} else {
  console.log("Невірний номер місяця");
}


// 4 завдання 
let color = prompt('Введіть колір світлофору');

switch (color) {
  case "червоний":
    console.log("Стоп");
    break;
  case "зелений":
    console.log("Йти");
    break;
  case "жовтий":
    console.log("Чекати");
    break;
  default:
    console.log("Невідомий колір");
}

// 5 завдвння 

let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));
let operator = prompt('Введіть дію');

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Ділення на нуль неможливе");
    } else {
      console.log(num1 / num2);
    }
    break;
  default:
    console.log("Невідомий оператор");
}
