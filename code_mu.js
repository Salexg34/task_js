// Уровень 1.1 задачника JavaScript
// task 1
//Дано число. Проверьте, отрицательное оно или нет. 
//Выведите об этом информацию в консоль.

// const num = 1;
// if(num < 0) {
//     console.log(true);
// } else console.log(false)


//task 2
//Дана строка. Выведите в консоль длину этой строки.

// const str = 'asdfgghjklfskfjhdjk';
// console.log(str.length)


//task 3
//Дана строка. Выведите в консоль последний символ строки

// const str = 'dfhdfkhdkh';
// console.log(str[str.length-1])


//task 4
//Дано число. Проверьте, четное оно или нет

// const num = 5;
// if(num % 2 === 0) {
//     console.log('это четное число')
// } else console.log('это не четное число');

//task 5
//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const wordOne = 'привет';
// const wordtwo = 'Gистолет';
// if(wordOne[0] === wordtwo[0]) {
//     console.log(true);
// } else console.log(false)

// task 6
//Дано слово. Получите его последнюю букву. Если слово 
//заканчивается на мягкий знак, то получите предпоследнюю букву.

// const word = 'уверенность';
// if(word[word.length-1] === 'ь') {
//     console.log(word[word.length-2])
// } else console.log(word[word.length-1])


//Уровень 1.2 задачника JavaScript
// task 1
//Дано число. Выведите в консоль первую цифру этого числа.

// const num = 1234567890;
// const firstNum = num.toString();
// console.log(firstNum.charAt(0))


//task 2
//Дано число. Выведите в консоль последнюю цифру этого числа
//version 1
// const num = 1234567890;
// const firstNum = num.toString();
// console.log(firstNum.charAt(firstNum.length-1))

//version 2
// const num = 1234567890;
// const firstNum = num % 10;
// console.log(firstNum)


//task 3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const num = 123456789;
// const str = num.toString();
// const sum = parseInt(str.charAt(0)) + parseInt(str.charAt(str.length-1));
// console.log(sum); 


//task 4
//Дано число. Выведите количество цифр в этом числе.

// const num = 123456789;
// const res = num.toString().length;
// console.log(res);

//task 5
//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// const firstNum = 12345;
// const secondNum = 5432;
// if(firstNum.toString().charAt(0) === secondNum.toString().charAt(0)) {
//     console.log('Числа совпадают')
// } else console.log('Числа не совпадают');


//Уровень 1.3 задачника JavaScript
//task 1
//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// const str = 'Шалом Василий';
// if(str.length > 1) {
//     console.log(str.charAt(str.length-2))
// }


//task 2
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// const firstNum = 5;
// const secondNum = 5;
// if(firstNum % secondNum == 0) {
//     console.log(true)
// } else console.log(false);


//Уровень 1.4 задачника JavaScript
//task 1 Выведите в консоль все целые числа от 1 до 100.

// for(let i = 0; i <= 100; i++) {
//     console.log(i)
// }


// task 2 Выведите в консоль все целые числа от -100 до 0

// for (let i = -100; i<= 0; i++) {
//         console.log(i)
// }

//task 3 Выведите в консоль все целые числа от 100 до 1

// for (let i = 100; i>0; i--) {
//     console.log(i)
// }

//task 4 Выведите в консоль все четные числа из промежутка от 1 до 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0){
//         console.log(i)
//     }

// }

//task 5 Выведите в консоль все числа кратные трем в промежутке от 1 до 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0){
//         console.log(i)
//     }
// }


//Уровень 1.5 задачника JavaScript
//task 1 Найдите сумму всех целых чисел от 1 до 100
//version 1
// const a = 1;
// const b = 100
// let sum = (b*(b+a))/2
// console.log(sum)

//version 2
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

//task 2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i%2==0){
//     sum += i;
//     }
// }
// console.log(sum);

//task 3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i%2!==0){
//     sum += i;
//     }
// }
// console.log(sum);

//task 4 Даны два целых числа. Найдите остаток от деления первого числа на второе
// const a = 5;
// const b = 2;
// const result = a%b;
// console.log(result)

//task 5 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки
// let str = 'qwertyuiop';
// for(let i = 0; i< str.length; i++) {
//     console.log(str[i])
// }


//Уровень 1.6 задачника JavaScript
//task 1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// const arr = [2, 3, 4, 5, 6];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += Math.pow(arr[i], 2) 
// }
// console.log(result);

//task 2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива

// const arr = [2, 3, 4, 5, 6];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += Math.sqrt(arr[i])
// }
// console.log(result);


//task 3 Дан массив с числами. Найдите сумму положительных элементов этого массива.

// 

//task 4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// const arr = [-5, 6, -2, 0, 7, 23, 43, 8, 9, 15];
// let result = 0;
// for (let i =0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         result += arr[i]
//     }
// }
// console.log(result);

//Уровень 1.7 задачника JavaScript
//task 1 Получите массив букв этой строки, Дана строка: 'abcde'

// let str = 'abcde';
// const arr2 = [...str];
// const arr = str.split('');
// console.log(arr)

//task 2 Дано некоторое число: 12345, Получите массив цифр этого числа.
// const num = 12345;
// const str = num.toString();
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//     arr.push(Number(str[i]))
// }
// console.log(arr);
// console.log(typeof arr[1]);

// const num = 12345;
// let arr = [];
// const strNum = num.toString();
// arr = (Array.from(strNum, Number));
// console.log(arr);
// console.log(typeof arr[2]);


//task 3 Дано некоторое число: 12345 Переверните его

// const num = 12345;
// const str = num.toString();
// let arr = [];
// for (let i = str.length-1; i >= 0; i--) {
//     arr.push(str[i])
// }
// arr = Number(arr.join(''));
// console.log(typeof arr);

// const num = 12345;
// const str = num.toString();
// let arr = str.split('');
// let result = Number(arr.reverse().join(''))
// console.log( typeof result)

//4 task Дано некоторое число: 12345 Найдите сумму цифр этого числа.
// const num = 12345;
// let str = num.toString();
// let result = 0;
// for (let i = 0; i < str.length; i++) {
//     result += parseInt(str[i])
// }
// console.log(result);

// const num = 12345;
// let str = num.toString();
// let result = 0;
// for (const char of str) {
//     result += parseInt(char);
// }
// console.log(result);


//Уровень 1.8 задачника JavaScript
//task 1 Заполните массив целыми числами от 1 до 10.
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr)

//task 2 Заполните массив четными числами из промежутка от 1 до 100.
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         arr.push(i);
//     }
// }
// console.log(arr)

// let arr = [];
// for (let i = 2; i <= 100; i += 2) {
//     arr.push(i);
// }
// console.log(arr)

//task 3 Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] 
// Округлите эти дроби до одного знака в дробной части.
// let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// let result = [];
// for (let elem of arr) {
//     result.push(elem.toFixed(1));
// }
// console.log(result);
const arr = [1.456, 2.125, 3.32, 4.1, 5.34];
const result = arr.map(elem => elem.toFixed(1))
console.log(result)

