// { a: 1, foo: {}, bar: [], baz: () => ‘’ } => { 1: 'a',  ‘{}’: ‘foo’ }

const obj = {
  a: 1,
  foo() {
    return [];
  },
  bar: {}
};
 function invert (objToInvert) {
    // создаем пустой объект, в который будем передавать инвертированные значения и ключи
    const invertedObj = {};

    // проходим циклом по всем ключам и значениям объекта
  for (const key in objToInvert) {
    // проверяем содержит ли объект key как собственное свойство
    if (objToInvert.hasOwnProperty(key)) {
        // получаем значение по ключу
      const value = objToInvert[key];
      // инвертируем значение - ключ
      invertedObj[value] = key;
    }
  }
// возвращаем инвертированный объект
  return invertedObj;
}

 console.log(invert(obj));