let positions = {
  Shirts: 0,
  Baggy: 0
};

function showCategory(category) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".slider-container").forEach(sec => sec.classList.add("hidden"));
  
  document.getElementById(category).classList.remove("hidden");
  
  if (category === "Shirts") {
    document.querySelector(".tab:nth-child(1)").classList.add("active");
  } else {
    document.querySelector(".tab:nth-child(2)").classList.add("active");
  }
}

function moveSlide(category, direction) {
  const container = document.getElementById(category);
  const slider = container.querySelector(".slider");
  const cards = container.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth + 20; // include margin
  const visibleCards = Math.floor(container.offsetWidth / cardWidth);

  const maxPosition = cards.length - visibleCards;

  positions[category] += direction;
  if (positions[category] < 0) positions[category] = 0;
  if (positions[category] > maxPosition) positions[category] = maxPosition;

  slider.style.transform = `translateX(-${positions[category] * cardWidth}px)`;
}
