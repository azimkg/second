// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// ! callback function - функция , которая передается в аргументы другой функции и вызывается внутри этой функции

// function doTAsk(task, startTask, finishTask) {
//   startTask(task);
//   finishTask(task);
// }
// function startTask(task) {
//   console.log(`Start ${task}`);
// }
// function finishTask(task) {
//   console.log(`Finish ${task}`);
// }
// doTAsk("Методы массивов", startTask, finishTask);

// ! forEach() ! перебирает массив и не создает новый массив !
// ! принимает CALLBACK функции

// const languages = ["JS", "CSS", "Python", "Java", "C++"];
// let fav = [];
// languages.forEach((item) => {
//   if (item === "JS") {
//     fav.push(item);
//   }
// });
// console.log(fav);

// let cat = [
//   {
//     name: "Murka",
//     age: 3,
//   },
//   {
//     name: "Bocha",
//     age: 6,
//   },
//   {
//     name: "Kisa",
//     age: 4,
//   },
//   {
//     name: "Harfild",
//     age: 7,
//   },
// ];
// let oldCats = [];
// cat.forEach((item, index, array) => {
//   if (cat.age < 5) {
//     oldCats.push(cat);
//   }
//   if (index === array.length - 1) {
//     console.log(`Это последняя кошка - ${cat[name]}`);
//   }
// });
// console.log(oldCats);

// arr.forEach((item, index, array) => {
//   console.log(item * 2);
// });

// let newArr = arr.map((item) => {
//   return item + 10;
// });
// console.log(newArr);

// ! map() перебирает массив и создает новый массив
// arr.map((item, index, array) => {
//   console.log(item);
// });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const numbers = [1, 2, 3, 4, 5, 6];
// let arr = numbers.map((item, index, array) => {
//   return item * 2;
// });
// console.log(arr);

// ! filter() фильтрует массив и создает новый массив, в котором находятся элементы подходящие по условиям

// let newArr = arr.filter((item, index, array) => {
//   return item > 4;
// });
// console.log(newArr);

// let str = "Ivan, Misha, Aktan, Oleg";
// let filterArr = str.split(", ").filter((item) => {
//      return item.length > 4;
//   return /a/gi.test(item);
// });
// console.log(filterArr);

// const words = ["Banana", "Ban", "car", "cater"];
// const longWords = words.filter((item) => {
//   return item.length > 4;
// });
// console.log(longWords);

// ! indexOf()- отличие от findIndex ищет по указанному значение, а findIndex по заданному условию
// ! возвращает первый индекс по которому жанный элемент найден в массиве.
// let arr = ["Ivan", "Misha", "Andrei", "Oleg", "Aktan"];
// let index = arr.indexOf("Oleg",4);
// console.log(index);

// const arr = ["Ivan", "Misha", "Andrei", "Oleg", "Lucas"];
// const foundInd = arr.indexOf("Oleg");
// console.log(foundInd);

// !findIndex() - возвращает индекс в массиве, если элемент удовлетворяет условие CALLBACK функции
// let index = arr.findIndex((item, index, array) => {
//   return item.length === 5;
// });
// console.log(index);

// const arr = ["Ivan", "Misha", "Andrei", "Oleg", "Lucas"];
// const foundInd = arr.findIndex((item, index, array) => {
//   return item === "Oleg";
// });
// console.log(foundInd);

// !find()- возвращает значение первого найденного в массиве элемента, которое удовлетворяет условие переданному в CALLBACK функции

// const numbers = [1, 5, 19, 23, 34, 11, 24, 5];
// const evenNumbers = numbers.find((item, index, array) => {
//   return item % 2 === 0;
// });
// console.log(evenNumbers);

// let arr = [
//   {
//     name: "Ivan",
//   },
//   {
//     name: "Misha",
//   },
//   {
//     name: "Oleg",
//   },
//   {
//     name: "Emily",
//   },
// ];
// console.log(arr.find((item) => item.name === "Oleg"));

// ! every() - метод который находит тип данных элемента
// let arr = [1, 3, 4, 5, "10", 34];
// let result = arr.every((item, index, array) => {
//   return typeof item === "number";
// });
// console.log(result);

// const arr = ["a", "b", "c"];
// let res = arr.every((item, index, array) => {
//   return item === "a";
// });
// console.log(res);

// ! some() - он возвращает true , если хотя бы один элемент явдяется задаваемым типом данных
// let arr = [1, 3, 4, 5, "10", 34];
// let result = arr.some((item, index, array) => {
//   return typeof item === "number";
// });
// console.log(result);

// const arr = [1, 3, 4, 5, "10", 34];
// let res = arr.some((item, index, array) => {
//   return item === "10";
// });
// console.log(res);

// ! includes(element, fromIndex)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr.includes(5, 3,);
// console.log(result);

// ! reduce()
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr.reduce((prevVAl, curVal, curIndex, array) => {
//   console.log(curVal); // 2,3,4,5,6,7,8
//   console.log(prevVAl); //1, undefined
//   console.log(curIndex); // all elements in curVal
//   console.log(array);
// });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr.reduce((prevVAl, curVal) => {
//   console.log(prevVAl);
//   return prevVAl + curVal; //36
//   return [...prevVAl, curVal]; //[1, 2, 3, 4, 5, 6, 7, 8]
// }, []);
// console.log(result);

// const arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((a, b) => {
//   return a + b;
// });
// console.log(sum);

// Методы массивов. Классная работа.

// Задание №1
// Дан массив из чисел: let nums = [12, 10, 99, 9, 3, 2, 120, 200,];
// Используя метод filter(), выведите в массив числа, которые больше или равны 10.
// Вывод: [12, 10, 99, 120, 200]

// !answer
// let num = [12, 10, 99, 9, 3, 2, 120, 200];
// let newNum = num.filter((item) => {
//   return item >= 10;
// });
// console.log(newNum);

// Задание №2
// Дан массив let lengthName = [`Patricia` , `William` , `Barbara` , `James` , `Chloe` , `Elizabeth` ];
//Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().

// ! answer
// let lengthName = [
//   `Patricia`,
//   `William`,
//   `Barbara`,
//   `James`,
//   `Chloe`,
//   `Elizabeth`,
// ];
// lengthName = lengthName.map((item) => {
//   return item.length;
// });
// console.log(lengthName);

// Задание №3
// Дан массив let arrNums = [12, 21, 27, 31, 45, 50 ];
//  С помощью цикла foreach и оператора if выведите в console элементы массива, которые больше 20-ти, но меньше 30-ти.

// !
// Задание №4
// Дан массив let total = [ 1, 5, 0, 3, 6 ];
// Суммируйте все значения в данном массиве и выведите результат в alert(). Используйте метод reduce().

// function checkTask(arr) {
//   arr = arr.filter((item) => {
//     return item > 0;
//   });
//   console.log(arr);
// }
// checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17]);

// function checkTask(arr) {
//   let newArr = arr.filter((item) => {
//     return item
//   });
//   console.log(newArr.join(""));
// }
// checkTask([4, 15, -4, 27, 12, 8]);

// function checkTask(arr) {
//   let max = arr[0];
//   arr = arr.forEach((elem, index) => {
//     if (index > 0) {
//       if (max < elem) {
//         max = elem;
//       }
//     }
//   });
//   console.log(max);
// }
// checkTask([4, 15, -4, 27, 12, 8]);

// function checkTask(arr) {
//   arr = arr.forEach((item, index, array) => {
//     if (item === 5) return item;
//   });
//   console.log(arr);
// }
// checkTask([4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]);

// function checkTask(arr) {
//   let newArr = [];
//   arr = arr.forEach((item) => {
//     newArr.push(item ** 2);
//   });
//   return newArr;
// }
// console.log(checkTask([1, 2, 3]));

// function checkTask(arr) {
//   let newArr = arr.filter((item, index, array) => {
//     return item < 4;
//   });
//   let res = newArr.reduce((a, b, index) => {
//     return a + b;
//   });
//   console.log(res);
// }
// checkTask([1, 2, 3, 0, 4, 5, 6]);

// function checkTask(arr) {
//   let result = arr.reduce(function (sum, elem, index) {
//     if (index === 0) {
//       return sum + elem;
//     } else {
//       return sum;
//     }
//   });
//   console.log(result);
// }
// checkTask([1, 2, 3, 0, 4, 5, 6]);

// let elevator = {
//   currentFloor: 1,
//   minFloor: 1,
//   maxFloor: 16,
//   printFloor() {
//     console.log(this.currentFloor);
//   },
//   printError() {
//     console.log("Error!");
//   },
//   upOneFloor() {
//     if (
//       this.currentFloor >= this.minFloor &&
//       this.currentFloor < this.maxFloor
//     ) {
//       this.currentFloor++;
//       this.printFloor();
//     } else {
//       this.printError();
//     }
//   },
//   downOneFloor() {
//     if (
//       this.currentFloor > this.minFloor &&
//       this.currentFloor <= this.maxFloor
//     ) {
//       this.currentFloor--;
//       this.printError();
//     } else {
//       this.printError();
//     }
//   },
//   toFloor(floor) {
//     if (floor >= this.minFloor && floor <= this.maxFloor) {
//       while (this.currentFloor < floor) {
//         this.upOneFloor();
//       }
//       while (this.currentFloor > floor) {
//         this.downOneFloor();
//       }
//     } else {
//       this.printError();
//     }
//   },
// };
// elevator.printFloor();
// elevator.upOneFloor();
// elevator.upOneFloor();
// elevator.downOneFloor();
// prompt(elevator.toFloor());
// elevator.toFloor(7);

// !  переюор чисел
// function checkTask(arr) {
//   let count = {};
//   let maxCount = 0;
//   let maxNum = 0;
//   arr.forEach((item) => {
//     if (count[item]) {
//       count[item] = count[item] + 1;
//     } else {
//       count[item] = 1;
//     }
//   });
//   for (let num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = +num;
//     }
//   }
//   return maxNum;
// }
// checkTask([4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]);

// ! Task 9
// function checkTask(arr) {
//   let num = 0;
//   arr.reduce((a, b) => {
//     if (b === 0) {
//       num = a;
//     }
//     return a + b;
//   });
//   console.log(num);
//   sum;
// }
// checkTask([1, 2, 3, 0, 4, 5, 6]);

// !Task 10
// function checkTask(arr) {
//   arr.forEach((elem) => {
//     if (elem.includes("<h1>")) {
//       console.log(`<h1>${elem}</h1>`);
//     } else if (elem.includes("<p>")) {
//       console.log(`<p>${elem}</p>`);
//     } else if (elem.includes("<div>")) {
//       console.log(`<div>${elem}</div>`);
//     }
//   });
// }
// checkTask(["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]);

// !Task 11
// function checkTask(arr) {
//   let arr2 = arr.reduce((target, key, index) => {
//     target[key[0]] = key[1];
//     return target;
//   }, {});
//   console.log(arr2);
// }
// checkTask([
//   ["a", 1],
//   ["b", 2],
// ]);

// !Task 12 распаковка массива
// ! вариант 1
// function checkTask(arr) {
//   let newArr = arr.flet().reduce((a, b) => a + b);
//   console.log(newArr);
// }
// checkTask([1, 2, [4, 5, 6], [7, 8]]);
//
// !вариант 2
// function checkTask(arr) {
//   let newArr = arr.reduce((a, b) => {
//     if (Array.isArray(b)) {
//       return a + b.reduce((a, b) => a + b);
//     }
//     return a + b;
//   });
//   console.log(newArr);
// }
// checkTask([1, 2, [4, 5, 6], [7, 8]]);

// !Task 13 - ASCII
// function checkTask(arr) {
//   let newArr = arr.map((item) => {
//     let sum = item
//       .toString()
//       .split("")
//       .reduce((a, b) => {
//         return +a + +b;
//       });
//     return String.fromCharCode(sum);
//   });
//   console.log(newArr.join(""));
// }
// checkTask([
//   584131398786538461382741n,
//   444521974525439455955n,
//   71415168525426614834414214n,
//   353238892594759181769n,
//   48955328774167683152n,
//   77672648114592331981342373n,
//   5136831421236n,
//   83269359618185726749n,
//   2554892676446686256n,
//   959958531366848121621517n,
//   4275965243664397923577n,
//   616142753591841179359n,
//   121266483532393851149467n,
//   17949678591875681n,
// ]);

// !Task 14
// function checkTask(arr) {
//   let arr1 = arr.aplit("");
//   let arr2 = arr1.map((item) => {
//     if (item.length >= 4) {
//       return item[0] + (item.length - 2) + item(item - 1);
//     } else {
//       return item;
//     }
//   });
//   return arr2.join("");
// }
// console.log(
//   checkTask(
//     "Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда! "
//   )
// );

// !Task 15
// function checkTask(arr){
//   return arr.map((item)=> {
//       let count = 0
//       arr.forEach((elem)=>{
//           item>elem?count++:null
//       })
//       return count;
//   })
//   }
//   checkTask(([6,5,4,8]))

// ! Task 1
// function checkTask(arr) {
//   arr.forEach((item) => {
//     if (typeof item === "number") {
//       console.log(item, "-", "число");
//     } else {
//       console.log(item, "-", "не число");
//     }
//   });
//   return arr;
// }
// console.log(checkTask(["Молоко", -77, 11, "Мед", -88]));

// ! Task2
// function checkTask(elem, arr) {
//   if (arr.includes(elem)) {
//     console.log(true, arr.indexOf(elem));
//   } else {
//     console.log(false);
//   }
// }
// checkTask(40, ["Молоко", 20, 40, "дом", 30]);

// !Task3

// function checkTask(arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     return (sum += item);
//   });
//   console.log(`forEach: ${sum}`);
//   let arr1 = arr.reduce((a, b) => {
//     return a + b;
//   });
//   console.log(`reduce: ${arr1}`);
//   let res = 0;
//   let newArr = arr.map((item) => {
//     return (res += item);
//   });
//   console.log(`map: ${res}`);
// }
// checkTask([5, 6, 7, 8, 9]);

// !Task 5
// function checkTask(arr) {
//   let newArr = arr.filter((item) => {
//     if (Array.isArray(item)) {
//       return item;
//     }
//   });
//   console.log(newArr);
// }
// checkTask([1, 2, [3, 4], 5, [6, 7]]);

// ! Task 7
// function checkTask(arr) {
//   let newArr = arr.slice(0, 3);
//   let arr1 = newArr.reduce((a, b) => {
//     return a + b;
//   });
//   console.log(arr1);
// }
// checkTask([1, 2, 3, 0, 4, 5, 6]);

// !Task 8
// function countArrIndex(arr, sum = 10) {
//   const obj = arr.reduce(
//     (acc, curr, index) => {
//       if (acc.sum < sum) {
//         acc.sum += curr;
//         acc.count = index;
//         return acc;
//       } else {
//         return acc;
//       }
//     },
//     { sum: 0, count: 0 }
//   );
//   return obj.count + 1;
// }
// console.log(countArrIndex([15, 3, 1, 4, 2, 4, 5, 6]));

// ! Task 10
// function checkTask(arr) {
//   let sum = [];
//   let newArr = arr.filter((item) => {
//     if (item < 0) {
//       sum.push(item);
//     }
//   });
//   console.log(sum.length);
// }
// checkTask([7, -1, -9, 0, 4, 5, -6]);

// !Task 11
// function checkTask(arr) {
//   let j, temp;
//   for (let i = arr.length - 1; i > 0; i--) {
//     j = Math.floor(Math.random() * (i + 1));
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }
// console.log(checkTask([4, 8, 12, 16]));

// ! Task 12
// function checkTask(arr) {
//   let newArr = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
//   console.log(newArr);
// }
// checkTask(["apple", "orange", "apple", "pear"]);

// !Task 13
// function checkTask(str) {
//   let arr = str.split("");
//   let count = {};
//   let maxCount = 0;
//   let maxNum = "i, a, e, o, u";
//   arr.forEach((item) => {
//     if (count[item]) {
//       count[item] = count[item] + 1;
//     } else {
//       count[item] = 1;
//     }
//   });
//   for (let num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = +num;
//     }
//   }
//   return maxNum;
// }
// checkTask("I Am awesome and so are you");

// !Task 15
// function checkTask(a, b) {
//   let sum = 0;
//   let res = 0;
//   let newArr = a.map((item) => {
//     return (sum += item ** 2);
//   });
//   let arr1 = b.map((item) => {
//     return (res += item ** 3);
//   });

//   return sum > res ? console.log(true) : console.log(false);
// }
// checkTask([4, 5, 6], [1, 2, 3]);
