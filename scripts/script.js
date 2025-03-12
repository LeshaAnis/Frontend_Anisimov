<<<<<<< HEAD
window.onload = function() {
  const preloader = document.getElementById('preloader'); // Находим элемент прелоадера

  // Плавное исчезновение прелоадера
  preloader.style.opacity = '1';
  setTimeout(() => {
      preloader.style.transition = 'opacity 0.5s ease';
      preloader.style.opacity = '0';
      setTimeout(() => {
          preloader.style.display = 'none'; // Полностью скрываем прелоадер
      }, 500); // Задержка для завершения анимации
  }, 1000); // Прелоадер будет виден минимум одну секунду
};





const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const cancelModalButton = document.getElementById("cancelModal");

// Открытие модального окна
openModalButton.onclick = function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    modal.style.display = "block";
    document.body.style.overflowY = 'hidden'; // Отключение скролла страницы
}

// Закрытие модального окна
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflowY = 'auto'; // Включение скролла страницы
}

// Закрытие при нажатии на крестик или кнопку "Отмена"
closeModalButton.onclick = closeModal;


// Закрытие при нажатии на полупрозрачную подложку
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}





=======
// Инициализация Swiper
const swiper = new Swiper('.swiper-slider', {
  direction: 'horizontal', // Горизонтальное направление
  loop: true, // Зацикливание слайдов

  slidesPerView: 1, // Показывать только один слайд
  spaceBetween: 0, // Без промежутков между слайдами

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  navigation: {
      nextEl: '.next',
      prevEl: '.prev',
  },
});

// Обработчики событий для кнопок навигации
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Проверяем, доступны ли кнопки в DOM
if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
      swiper.slidePrev(); // Переход к предыдущему слайду
  });

  nextButton.addEventListener('click', () => {
      swiper.slideNext(); // Переход к следующему слайду
  });
} else {
  console.error("Кнопки навигации не найдены в DOM.");
}
>>>>>>> 27442650c11bdf3cbf415228a8e16e6bd9ae7631
