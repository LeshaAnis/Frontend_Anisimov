// Интерфейс для данных карточки
interface Card {
    title: string;
    description: string;
    imageUrl: string;
}

// Функция для генерации HTML-шаблона карточки
function generateCardTemplate(card: Card): string {
    return `
        <div class="services_section">
            <img src="${card.imageUrl}" alt="${card.title}" class="services_section_images">
            <p class="services_section_upper">${card.title}</p>
            <p class="services_section_lower">${card.description}</p>
        </div>
    `;
}

// Функция для вставки карточек в указанный контейнер
function insertCards(containerId: string, cards: Record<string, Card>): void {
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

// Функция для получения данных с сервера
async function fetchCardsFromServer() {
    try {
        // Запрос к локальному JSON-файлу
        const response = await fetch('games.json');
        const data = await response.json();

        // Вставка карточек в контейнер
        insertCards('id_services_section', data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    fetchCardsFromServer();
});