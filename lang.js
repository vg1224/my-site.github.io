const translations = {
  uk: {
    "header-title": "Створення сучасних сайтів та веб-рішень",
    "contact-phone": "Телефон:",
    "contact-telegram": "Telegram:",
    "about-me-title": "Про мене",
    "about-me-text":
      "Ласкаво прошу на мій особистий сайт. Мене звати Валерій Гордієць Олексійович. Я навчаюся на 3-му курсі за спеціальністю АКІТР у ХНУ. Займаюся розробкою програмного забезпечення та вебсайтів, використовуючи HTML, CSS та JavaScript.",
    "why-choose-me": "Чому вам варто вибрати мене",
    "advantage-1": "Низька ціна, лендинг від 4000 грн",
    "advantage-2": "Використання сучасних технологій: HTML, CSS, JavaScript",
    "advantage-3": "Висока швидкість, сайт буде створено менше ніж за тиждень",
    "advantage-4": "Активна співпраця з замовником",
    "advantage-5":
      "Особлива можливість поповнити портфоліо молодого фронтендера",
    "projects-title": "Мої проекти",
    "project-1": "посилання на проект webstudio",
    "project-2": "посилання на проект магазину продуктів",
    "calculator-title": "Калькулятор вартості сайту",
    "calculate-button": "Розрахувати",
    "footer-site": "Мій сайт",
  },
  ru: {
    "header-title": "Создание современных сайтов и веб-решений",
    "contact-phone": "Телефон:",
    "contact-telegram": "Телеграм:",
    "about-me-title": "Обо мне",
    "about-me-text":
      "Добро пожаловать на мой персональный сайт. Меня зовут Валерий Гордеец Алексеевич. Я учусь на 3-м курсе по специальности АКИТР в ХНУ. Занимаюсь разработкой программного обеспечения и веб-сайтов, используя HTML, CSS и JavaScript.",
    "why-choose-me": "Почему стоит выбрать меня",
    "advantage-1": "Низкая цена, лендинг от 4000 грн",
    "advantage-2": "Современные технологии: HTML, CSS, JavaScript",
    "advantage-3": "Высокая скорость — сайт будет готов менее чем за неделю",
    "advantage-4": "Активное сотрудничество с заказчиком",
    "advantage-5":
      "Отличная возможность пополнить портфолио молодого фронтендера",
    "projects-title": "Мои проекты",
    "project-1": "ссылка на проект webstudio",
    "project-2": "ссылка на проект продуктового магазина",
    "calculator-title": "Калькулятор стоимости сайта",
    "calculate-button": "Рассчитать",
    "footer-site": "Мой сайт",
  },
  en: {
    "header-title": "Creating Modern Websites and Web Solutions",
    "contact-phone": "Phone:",
    "contact-telegram": "Telegram:",
    "about-me-title": "About Me",
    "about-me-text":
      "Welcome to my personal website. My name is Valerii Hordiiets Oleksiiovych. I’m a 3rd-year student majoring in ACITR at KhNU. I develop software and websites using HTML, CSS, and JavaScript.",
    "why-choose-me": "Why You Should Choose Me",
    "advantage-1": "Low price, landing from 4000 UAH",
    "advantage-2": "Modern technologies: HTML, CSS, JavaScript",
    "advantage-3": "High speed — the site will be ready in less than a week",
    "advantage-4": "Active collaboration with the client",
    "advantage-5":
      "A great opportunity to expand a young frontender's portfolio",
    "projects-title": "My Projects",
    "project-1": "link to webstudio project",
    "project-2": "link to grocery store project",
    "calculator-title": "Website Price Calculator",
    "calculate-button": "Calculate",
    "footer-site": "My Website",
  },
};

function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "uk";
  document.getElementById("language-select").value = savedLang;
  changeLanguage();
});

let currentLang = localStorage.getItem("lang") || "uk";
document
  .getElementById("language-select")
  .addEventListener("change", changeLanguage);
document
  .getElementById("calculate-button")
  .addEventListener("click", calculatePrice);
