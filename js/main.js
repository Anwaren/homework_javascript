
//Линейные алгоритмы
//1. Поменять местами значения двух переменных.
{
    let a = 0;
    let b = 1;
    [a, b] = [b, a];
}

//2. Найти длину гипотенузы прямоугольного треугольника (по двум введенным пользователем катетам вычислить длину гипотенузы.)
{
    const leg_1 = Number(prompt("Enter leg_1"));
    const leg_2 = Number(prompt("Enter leg_2"));
    const hypo = Math.sqrt(Math.pow(leg_1, 2) + Math.pow(leg_2, 2));
}

//3. Задаются координаты двух точек (x1, y1, x2, y2). Вывести уравнение прямой, проходящей через эти две точки в виде y = k*x + b
{
    function getLineEquation(x1,y1,x2,y2)
    {
        if(0 === (x2 -x1))
            return;

        const k = (y2 - y1)/(x2 -x1);
        const b = y1 - k*x1;

        const equation = `y = ${k}*x + ${b}`;
        console.log(equation)
    }

    getLineEquation(-2, 1, 2, 3);
}


function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Условия
//1. Не прибегая к библиотеке Math, посчитать выражение (max(a*b*c, a+b+c) + 3). a, b и c - рандом от -10 до 10 
{
    const min = -10;
    const max = 10;

    const a = random(min, max);
    const b = random(min, max);
    const c = random(min, max);

    const sum = a+b+c;
    const mul = a*b*c;

    if(sum > mul)
        console.log(sum + 3);
    else
        console.log(mul + 3);
}
//2. Вводятся два целых числа. Проверить, делится ли первое на второе. Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае). 
{
    const min = -100;
    const max = 100;

    const a = random(min, max);
    let b = 0;
    while(0 === b)
        b = random(min, max);

    const mod = a % b;
    const div = parseInt(a / b);
    if(0 === mod)
    {
        console.log(`${a} делится на ${b} без остатка`);
    }
    else
    {
        console.log(`${a} не делится на ${b} без остатка`);
        console.log(`Остаток от деления - ${mod}`);
    }

    console.log(`Частное - ${div}`);
}

//3. Определить, какой четверти принадлежит точка с координатами (x, y). x и y - рандом от -10 до 10
{
    const min = -10;
    const max = 10;

    const x = random(min, max);
    const y = random(min, max);

    if(x > 0 && y > 0)
        console.log('Первая четверть');
    else if(x > 0 && y < 0)
        console.log('Вторая четверть');
    else if(x < 0 && y < 0)
        console.log('Третья четверть');
    else if(x < 0 && y > 0)
        console.log('Четвертая четверть');
    else
        console.log('Четверть не определена');
}

//4. Определение принадлежности точки кругу с центром в начале координат: x и y - рандом от -15 до 15, r - рандом от -10 до 10
{
    const min = -15;
    const max = 15;

    const x = random(min, max);
    const y = random(min, max);

    const r = random(1, 10);

    const l = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if(l <= r)
        console.log(`Точка (${x}, ${y}) принадлежит кругу радиусом ${r} с центром (0, 0)`);
    else
        console.log(`Точка (${x}, ${y}) не принадлежит кругу радиусом ${r} с центром (0, 0)`);
}

//5. Вычислить корни квадратного уравнения. 
{
    const a = 1;
    const b = -5;
    const c = 6;

    const D = Math.pow(b, 2) - 4*a*c;

    if(D > 0)
    {
        const x1 = (-b - Math.sqrt(D))/2*a;
        const x2 = (-b + Math.sqrt(D))/2*a;

        console.log(`${x1}, ${x2} - корни квадратного уравнения`);
    }
    else if (D = 0)
    {
        const x = -b/2*a;

        console.log(`${x} - корень квадратного уравнения`);
    }
    else
        console.log('Нет действительных корней');
}


//Циклы
// 1. Вычислить факториал числа n. n - рандом от 1 до 15
{
    const min = 1;
    const max = 15;

    const n = random(min, max);
    let factorial_n = 1;

    for(let i = 1; i <= n; ++i)
    {
        factorial_n *= i;
    }

    console.log(`${n}! = ${factorial_n}`);
}

//2. Вывести таблицу значений функции y = -0.23x2 + x. Значения аргумента (x) задаются минимумом, максимумом и шагом.
{
    const start = -10;
    const end = 10;
    const step = 2;

    for(let i = start; i <= end; i+=step)
    {
        const result = -0.23*Math.pow(i, 2) + i;
        console.log(`x = ${i}, y = ${result}`);
    }
}

//3. Найти сумму и произведение цифр введенного натурального числа. число - рандом от 10000 до 100000000
{
    const min = 10000;
    const max = 100000000;

    const number = random(min, max);
    const arrayOfDigits = Array.from(String(number), Number);

    let sum = 0;
    let mul = 1;

    for(let i = 0; i < arrayOfDigits.length; ++i)
    {
        sum += arrayOfDigits[i];
        mul *= arrayOfDigits[i];
    }

    console.log(`Сумма цифр цисла ${number} = ${sum}, произведение цифр = ${mul}`);
}


// 4. Докажите, что для множества натуральных чисел верно 1+2+...+n = n(n+1)/2
{
    const n = random(10,50);

    let right = n*(n+1)/2;

    let left = 0;
    for(let i = 1; i <=n; ++i)
    {
        left +=i;
    }

    if(left === right)
        console.log("1+2+...+n = n(n+1)/2");
    else
        console.log("1+2+...+n != n(n+1)/2");
}

// 5. Вывести на экран столько элементов ряда Фибоначчи, сколько указал пользователь. 
{
    const count = Number(prompt("Введите количество чисел ряда Фибоначчи: "));
    
    let lastNumber = 0;
    let currentNumber = 1;

    let result = "";

    for(let i = 0; i < count; ++i)
    {
        let next = lastNumber + currentNumber;
        result = result + next + " ";

        lastNumber = currentNumber;
        currentNumber = next;
    }

    console.log(result);
}

let i = 0;