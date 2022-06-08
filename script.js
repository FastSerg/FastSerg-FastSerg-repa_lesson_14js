// 1. Создайте объект userObj, описывающий человека.
// Следующие поля обязательны:
// a. firstName – любое имя, строка
// b. lastName – любая фамилия, строка
// c. age – любой возраст, число

var userObj = {
  firstName: 'Boris',
  lastName: 'Johnson',
  age: 58
}

// 2. Для объекта из п.1 создайте метод fullName, который будет возвращать
// полное имя, состоящее из firstName и lastName, склеенных в строку
// через пробел, например:
// userObj.firstName ← 'Имя
// userObj.lastName ← Фамилия'
// userObj.fullName() → 'Имя Фамилия'.



userObj.fullName = 
   () => {
    return `${userObj.firstName} ${userObj.lastName}` 
  }

console.log(userObj.fullName());

// 3. Дана функция defUpperStr('My text'), которая возвращает текст,
// преобразованный в верхний регистр, т.е:
// defUpperStr('My text') → 'MY TEXT'.

// Если функция вызывается без параметра defUpperStr(), она не должна
// возвращать undefined, в этом случае требуется вернуть строку текста по
// умолчанию в верхнем регистре, т.е:
// defUpperStr() → 'DEFAULT TEXT'.

// При выполнении задачи не используйте оператор if, требуется решение
// с логическим оператором ||.
function defUpperStr (str) {
  return  (str|| 'DEFAULT TEXT').toUpperCase() 
}
console.log(defUpperStr());
console.log(defUpperStr('text'));

// 4. Создайте функцию evenFn(n), которая принимает параметром число –
// количество итераций цикла, т.е. for 0..n. Функция должна вернуть
// массив, состоящий только из четных значений, генерируемых в цикле.

// Причем:
// a. 0 не должен попадать в результирующий массив
// b. цикл должен работать до n включительно
// c. разрешен только оператор for
// Например:
// evenFn(10) → [2, 4, 6, 8, 10]
// evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
// evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


function evenFn(n) {
  var arr = [];

  for(var i = 1; i <= n; i++) { 
    if(i % 2 === 0) {
      arr.push(i)
    }
  }
    return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

// 5. Создайте функцию weekFn(n), которая принимает номер дня недели, а
// возвращает его название. Если вводится строка, любое дробное число
// или число вне диапазона 1..7 – функция должна вернуть null.

// Например:
// 1 → 'Понедельник'
// 2 → 'Вторник'
// ...
// 7 → 'Воскресенье'

// В реализации функции обязательно должны быть использованы
// операторы switch / case / default.

function weekFn(n) {
  var waeek = '';
  switch (n) {
    case 1:
      waeek = 'Понедельник';
      break;
    
    case 2:
      waeek = 'Вторник';
      break;

    case 3:
      waeek = 'Среда';
    break;

    case 4:
      waeek = 'Четверг';
    break;

    case 5:
      waeek = 'Пятница';
    break;

    case 6:
      waeek = 'Суббота';
    break;

    case 7:
      waeek = 'Воскресенье';
    break;

    default:
      waeek = null;
  }

  return waeek;
}

console.log(weekFn(2));
console.log(weekFn('b'));


// 6. Создайте функцию ageClassification(n), которая будет в качестве
// параметра принимать любые числа и возвращать строку согласно
// следующим условиям, n:
// менее 0 – null
// 0..24 – 'детский возраст'
// 24+..44 – 'молодой возраст'
// 44+..65 – 'средний возраст'
// 65+..75 – 'пожилой возраст'
// 75+..90 – 'старческий возраст'
// 90+..122 – 'долгожители'
// более 122 – null
// При выполнении задания допускается использовать только тернарный

function ageClassification(n) {
  var str = '';
    n >= 0 && n <= 24 ? str = 'детский возраст':
      n > 24 && n <= 44 ? str = 'молодой возраст':
        n > 44 && n <= 65 ? str = 'средний возраст': 
          n > 65 && n <= 75 ? str = 'пожилой возраст': 
            n > 75 && n <= 90 ? str = 'старческий возраст':
              n > 90 && n <= 122 ? str = 'долгожители': str = null; 

  return str;
}

console.log(ageClassification(01));


// 7. Создайте функцию oddFn(n), которая принимает параметром число –
// количество итераций цикла. Функция должна вернуть массив, состоящий
// только из нечетных значений, генерируемых в цикле.

// Причем:
// a. 0 не должен попадать в результирующий массив
// b. цикл должен работать до n включительно
// c. разрешен только оператор while
// Например:
// oddFn(10) → [1, 3, 5, 7, 9]
// oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
// oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]


function oddFn(n) {
  var arr = [];
  var i = 0;
  while(i++ < n) {
    if(i % 2 === 1) {
      arr.push(i)
    }
  }
  return arr;
}

console.log(oddFn(12));

// 8. Создайте основную функцию mainFunc(a, b, func), которая принимает
// три параметра:
// ○ a – число
// ○ b – число
// ○ func – обрабатывающая параметры a и b, возвратная (callback) функция
// Реализуйте проверку: если третьим параметром передается не функция,
// нужно вернуть false.
// Реализуйте следующие функции, которые будут осуществлять механизм
// callback в основной функции, возвращая ей результат собственного
// вычисления...
// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в
// диапазоне между a и b включительно.
// cbPow(a, b) – вычисляет и возвращает результат возведения
// числа a в степень b.
// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.
// Для возведения в степень и получения произвольного значения можете
// воспользоваться методами объекта Math.


// mainFunc() должна возвращать результат работы переданной ей
// возвратной функции, например:
// mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
// mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
// mainFunc(2, 5, cbPow) → 32
// mainFunc(2, 5, cbAdd) → 7
// mainFunc(2, 5, 'not a func') → false

function mainFunc(a, b, func) {

  if(typeof func === 'function') {
    return func(a,b);
  } 

  return false;
}

function cbRandom(a, b) {
  return Math.floor(Math.random() * (b - a) + a); 
}

 function cbPow(a, b) {
  return Math.pow(a,b);
}

function cbAdd(a, b) {
  return a + b;
}

mainFunc(2, 5, cbRandom)
mainFunc(10, 30, cbRandom)
mainFunc(2, 5, cbPow)
mainFunc(2, 5, cbAdd)
mainFunc(2, 5, 'not a func')

