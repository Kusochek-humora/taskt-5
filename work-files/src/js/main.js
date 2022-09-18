const accordeonBox = document.querySelector(".faq-accordeons"),
  button = document.querySelectorAll(".faq-accordeons__item"),
  question = document.querySelectorAll(".faq-accordeons__item-question"),
  answer = document.querySelectorAll(".faq-accordeons__item-answer");

accordeonBox.addEventListener("click", (e) => {
  button.forEach((item, index) => {
    answer[index].style.setProperty(
      "--length",
      answer[index].scrollHeight + "px"
    );
    if (e.target === item) {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        question[index].classList.remove("active");
        answer[index].classList.remove("active");
      } else {
        for (let i = 0; i <= button.length; i++) {
          button[i].classList.remove("active");
          question[i].classList.remove("active");
          answer[i].classList.remove("active");
          item.classList.add("active");
          question[index].classList.add("active");
          answer[index].classList.add("active");
        }
      }
    }
  });
});
