/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
    return x == x
        // переменную x приводим к строковому значению
        .toString()
        // конвертируем строку x массив
        .split('')
        // переворачиваем массив
        .reverse()
        // конвертируем массив обратно в строку
        .join('')
};
console.log(isPalindrome(121));