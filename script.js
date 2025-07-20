document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const feedbackList = document.getElementById("feedbackList");

  // Завантажуємо відгуки з локального сховища при завантаженні сторінки
  const loadFeedbacks = () => {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbackList.innerHTML = "<h3>Останні відгуки</h3>";
    if (feedbacks.length === 0) {
      feedbackList.innerHTML += "<p>Поки що немає відгуків.</p>";
    } else {
      // Перевертаємо масив, щоб нові відгуки були зверху
      feedbacks.reverse().forEach((feedback) => {
        addFeedbackToDOM(feedback);
      });
    }
  };

  // Функція для створення зірочок
  const createRatingStars = (rating) => {
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starsHtml += '<span class="star-filled">★</span>';
      } else {
        starsHtml += '<span class="star-empty">★</span>';
      }
    }
    return `<div class="display-rating">${starsHtml}</div>`;
  };

  // Додаємо відгук на сторінку
  const addFeedbackToDOM = (feedback) => {
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");

    const ratingStars = createRatingStars(feedback.rating);
    feedbackItem.innerHTML = `
      <h4>${feedback.name}</h4>
      ${ratingStars}
      <p>${feedback.review}</p>
    `;
    // Додаємо новий відгук на початок списку
    feedbackList.prepend(feedbackItem);
  };

  // Обробляємо відправлення форми
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
    const rating = document.querySelector('input[name="rating"]:checked');

    if (!rating) {
      alert("Будь ласка, поставте оцінку!");
      return;
    }

    const newFeedback = { name, review, rating: rating.value };

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    // Додаємо новий відгук на початок масиву
    feedbacks.unshift(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    addFeedbackToDOM(newFeedback);

    form.reset();
  });

  loadFeedbacks();
});
