const buttons = document.querySelectorAll('.language-card button');
const languageCards = document.querySelectorAll('.language-card');
console.log(buttons);

console.log(languageCards);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.id;
    console.log(targetId);

    languageCards.forEach((card) => {
      if (card.dataset.id === targetId) {
        card.classList.toggle('active-card');
      } else {
        card.classList.remove('active-card');
      }
    });
  });
});