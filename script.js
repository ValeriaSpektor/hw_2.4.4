const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
   // Оператор debugger создает точку остановки: выполнение скрипта приостановится здесь. 
//Это позволяет вам проводить отладку, шагая по коду и проверяя значения переменных в момент останова.
    debugger;
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;
    return bonus;
    };
//является последней строкой в функции calculateBonus, и выполнение скрипта также приостанавливается на этой строке.
//Во время остановки на этой строке, вы можете проверить текущее значение переменной bonus и убедиться, что функция возвращает ожидаемый результат.
