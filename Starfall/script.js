


// Переменная для хранения баланса
let Balance = 0;

// Получаем элементы
const showMessageBtn = document.getElementById("showMessageBtn");
const balanceValue = document.getElementById("balanceValue");

// Функция для увеличения баланса на 1
function increaseBalance() {
    Balance += 11 // Прибавляем 1 к балансу
    balanceValue.textContent = Balance; // Обновляем отображение баланса на странице

}

// Добавляем обработчик события на кнопку
showMessageBtn.addEventListener("click", increaseBalance);



