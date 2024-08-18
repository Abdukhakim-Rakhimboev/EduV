// Функция для получения параметра из URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', function() {
  // Получаем параметр block из URL
  const targetBlock = getQueryParam('block') || 'content1'; // По умолчанию content1

  // Активируем соответствующий блок
  document.getElementById(targetBlock).classList.add('active');

  // Добавляем событие на кнопки навигации
  document.querySelectorAll('.nav-button').forEach(button => {
      button.addEventListener('click', function() {
          // Скрываем все блоки контента
          document.querySelectorAll('.content-block').forEach(block => {
              block.classList.remove('active');
          });

          // Показываем выбранный блок контента
          const target = this.getAttribute('data-target');
          document.getElementById(target).classList.add('active');
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Получаем параметр block из URL
  const targetBlock = getQueryParam('block') || 'content1'; // По умолчанию content1

  // Активируем соответствующий блок
  document.getElementById(targetBlock).classList.add('activee');

  // Добавляем событие на кнопки навигации
  document.querySelectorAll('.btn-box').forEach(hello => {
    hello.addEventListener('click', function() {
        // Скрываем все блоки контента
        document.querySelectorAll('.nav-button').forEach(sec => {
            sec.classList.remove('activee');
        });

        // Показываем выбранный блок контента
        const goal = this.getAttribute('data-target');
        document.getElementById(goal).classList.add('activee');
      });
    });
});