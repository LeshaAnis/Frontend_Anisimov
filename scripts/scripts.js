  document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.swiper-container', {
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
          console.error('Кнопки навигации не найдены в DOM.');
        }
      });