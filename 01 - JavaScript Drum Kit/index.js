// wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // get a collection of divs to add click event listener
  let drums = [...document.getElementsByClassName("key")];

  drums.forEach(value => {
    value.addEventListener("click", event => {
      
      playSound(event.target.attributes[0].value);
    });
  });
});

const playSound = key => {
  const el = document.querySelector(`audio[data-key='${key}']`);
  document.querySelector(`div[data-key='${key}']`).classList.add('playing');
  setTimeout(() => document.querySelector(`div[data-key='${key}']`).classList.remove('playing'), 50);
  el.play();
};
