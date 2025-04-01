"use strict";
// Объект с данными карточек
const cards = {
    card1: {
        title: "Мир Танков",
        description: "Многопользовательская онлайн-игра, в которой игроки управляют танками и сражаются друг с другом...",
        imageUrl: "images/mir_tankov_1.jpg"
    },
    card2: {
        title: "Escape from Tarkov",
        description: "Реалистичный шутер от первого лица с элементами RPG и выживания...",
        imageUrl: "images/tarkov_1.jpg"
    },
    card3: {
        title: "Call of Duty: Warzone",
        description: "Бесплатная королевская битва, в которой игроки сражаются на огромной карте...",
        imageUrl: "images/warzone_2.jpg"
    },
    card4: {
        title: "Grand Theft Auto V",
        description: "Экшн-игра с открытым миром, в которой игроки могут исследовать вымышленный город Лос-Сантос...",
        imageUrl: "images/Gta_5_1.jpg"
    },
    card5: {
        title: "PUBG",
        description: "Одна из первых игр в жанре королевской битвы...",
        imageUrl: "images/pubg_1.jpg"
    },
    card6: {
        title: "Overwatch",
        description: "Overwatch — многопользовательская компьютерная игра в жанре геройского шутера...",
        imageUrl: "images/overwatch.jpg"
    },
    card7: {
        title: "Dota 2",
        description: "Многопользовательская онлайн-игра в жанре MOBA...",
        imageUrl: "images/dota_2_1.jpg"
    },
    card8: {
        title: "Counter-Strike 2",
        description: "Обновленная версия популярной серии шутеров от первого лица...",
        imageUrl: "images/cs_2_1.jpg"
    }
};
// Функция для генерации HTML-шаблона карточки
function generateCardTemplate(card) {
    return `
        <div class="services_section">
            <img src="${card.imageUrl}" alt="${card.title}" class="services_section_images">
            <p class="services_section_upper">${card.title}</p>
            <p class="services_section_lower">${card.description}</p>
        </div>
    `;
}
// Функция для вставки карточек в указанный контейнер
function insertCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Контейнер с ID "${containerId}" не найден.`);
        return;
    }
    // Очистим контейнер перед добавлением новых карточек
    container.innerHTML = '';
    // Перебираем объект cards и добавляем карточки в контейнер
    for (const key in cards) {
        if (cards.hasOwnProperty(key)) {
            const cardHTML = generateCardTemplate(cards[key]);
            container.innerHTML += cardHTML;
        }
    }
}
// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    insertCards('id_services_section');
});
