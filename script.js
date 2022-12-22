const student = "Воронин Никита Валерьевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

function getRandom (min,max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random()*(max - min +1)) + min;
}

function throwRandomError (errorRate) {
    if (getRandom(0,100) <= errorRate) {
        throw new Error("Что-то не так...")
    }
}

let errorRate = +prompt('Вероятность появления ошибки в процентах', 20)

try {
    throwRandomError(errorRate);

    console.log('Никаких проблем');
} catch (err) {
    console.log('Обнаружена ошибка');

    console.log(err);
}