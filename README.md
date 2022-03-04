# homework17

Запросить у пользователя 2 числа (число, степень), после чего вывести ему результат во всплывающем окне.

Основная функция mainFunction.
1. Пишем функцию, которая принимает в качестве параметра callback.
2. В теле функции вам нужно написать код, который будет запрашивать у юзера 2 числа — эти числа должны храниться в разных переменных.
3. Также в теле функции нужно вызвать callback, который вы передаете в качестве аргумента. 
4. При вызове callback в него нужно передать аргументами те 2 числа, которые вы запрашивали у пользователя ранее.

Callback функция exponentiation.
Эта функция будет передаваться в mainFunction в качестве аргумента.
1. Функция должна принимать 2 параметра: те числа, которые мы ей передаем в основной функции в пункте 4 «Основной функции».
2. В теле функции нам нужно возвести число в степень и записать результат этой операции в переменную. 
3. Также в теле функции нужно написать код, который будет выводить пользователю результат во всплывающем окне.

После написания этих функций необходимо вызвать «Основную функцию»  и ей, в качестве аргумента, передать callback функцию (по имени — не вызывая).

Доп. материалы (Обязательно читать)
https://developer.mozilla.org/ru/docs/Glossary/Callback_function
https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback

 

*Дополнительные задания 

В качестве дополнительного задания можете написать еще несколько callback функций, которые будут производить другие вычисления.
Функции будут работать аналогично, как и первая «Callback функция exponentiation», которая описана выше, но отличаться будет только пункт 2,
(вычисление, которое она производит) и название функции.
Ниже приведено название доп. Callback функций и то, что они должны делать.

Callback функция multiply:
1. Тоже смое, что и в Callback функции exponentiation.
2. В теле функции нам нужно умножить ( * ) первый аргумент на второй аргумент и записать результат этой операции в переменную.
3. Тоже смое, что и в Callback функции exponentiation.

Callback функция division:
1. Тоже смое, что и в Callback функции exponentiation.
2. В теле функции нам нужно поделить ( / ) первый аргумент на второй аргумент и записать результат этой операции в переменную.
3. Тоже смое, что и в Callback функции exponentiation.

Callback функция modulo:
1. Тоже смое, что и в Callback функции exponentiation.
2. В теле функции нам нужно вычислить остаток от деления ( % ) первого аргумента на второй аргумент и записать результат этой операции в переменную.
3. Тоже смое, что и в Callback функции exponentiation.
