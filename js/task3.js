//3. Використовуйте один метод всередині функції checkPositive, щоб перевірити,
//чи є будь-який елемент в arr позитивним. Функція має повертати логічне значення.

function checkPositive(arr) {
  const checked = arr.some((element) => {
    return element > 0;
  });
  console.log(checked);
}
checkPositive([1, 2, -3, 4, 5]);
