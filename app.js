
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-links");

navToggle.addEventListener("click", function () {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("show-links");
  }
});

const btnEl = document.querySelectorAll('.copy-btn');


btnEl.forEach(btnEl => {
   btnEl.addEventListener('click', () => {
      btnEl.classList.remove('copy-btn')
      btnEl.classList.add('copy-btn-active');
      btnEl.innerText = "Copied"
   })
})
