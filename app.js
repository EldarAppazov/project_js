'use strict';

// разминка
let makro = 3000;
let korzinka = 500;

if (makro > korzinka) {
    alert('в корзинке дешевле');
} else {
    alert('в макро дешевле');
}
// task1
// y = f(x)
// y = x-0.5, if x>0
// y = 0, if x=0
// y = |x|, if x<0

// let x = +prompt('input x');
// if (x > 0) {
//     alert(`y= ${x-0.5}`);
// } else if (x == 0) {
//     alert('y=0');
// } else {
//     alert(`y= ${Math.abs(x)}`)
// }

// m=vp
// p=m/v
// v = m/p
// let velichina = prompt('что вы хотите вычислить (объем, масса, плотность)');

// let m;
// let p;
// let v;

// if (velichina == 'объем') {
//     m = prompt('input massa');
//     p = prompt('input plotnost');
//     alert(`объем =  ${m*p}`);
// }

// task3

// let yers = +prompt('input yers');

// if (yers % 4 == 0);



let color = prompt('введите цвет');

switch (color) {
    case 'красный':
        alert('red');
        break;
    case 'желтый':
        alert('yellow');
        break;
    case 'синий':
        alert('blue');
        break;
    case 'черный':
        alert('black');
        break;
    default:
        alert('вы написали не правильно');
        break;
}