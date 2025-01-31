// Danila typeScript header (c). All rights recerved!

function getCurrentDate(): void {
    console.log(Date.now());
    }
 // Ждем, пока загрузится вся страница
 window.onload = function() {
    // Устанавливаем таймер на 10 секунд (10000 миллисекунд)
    setTimeout(function() {
        getCurrentDate();
    }, 10000);
};

// вариант 2 (Ефимов Данила)