// 1.  Выведите с помощью цикла столбец чисел от 1 до 100
/* let ul = document.createElement('ul');
document.body.append(ul);



for (let i = 1; i <= 100; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    ul.append(li);
} */

// 2. Выведите с помощью цикла столбец чисел от 100 до 1
/* let ul = document.createElement('ul');
document.body.append(ul);

for (let i = 100; i >= 1; i--)  {
    let li = document.createElement('li');
    li.textContent = i;
    ul.append(li); 
} */


// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100
/* let ul = document.createElement('ul');
document.body.append(ul);


for (let i = 2; i <= 100; i += 2)  {

    if ( i % 2  !== 0) {
        continue;
    }

    let li = document.createElement('li');
    li.textContent = i;
    ul.append(li); 
    
}
 */

//  4. Заполните массив 10-ю иксами с помощью цикла

/* const arr = [];

for( let i = 0; i <= 10; i++){
    arr[i] = 'x';
}
console.log(arr); 
*/

// 5. Заполните массив числами от 1 до 10 с помощью цикла

/* const arr = [];

for( let i = 1; i <= 10; i++){
    arr.push = i;
}
console.log(arr); 
*/

// 6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части

const arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push(Math.random());
}
console.log(arr);

