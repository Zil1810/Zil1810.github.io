"use strict";
/*---------**********************************************----------*/
/*---------* CHECK INPUT EMAIL TO DISPLAY PERSONAL INFO *----------*/
/*---------**********************************************--------- */
const emailCheck = document.querySelector(".email-check");
const personalInfo = document.querySelector(".personal-info");
const emailHelp = document.getElementById("email-help");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btnSubmit = document.querySelector(".btn--email");
btnSubmit.addEventListener("click", function () {
  const inputEmail = document.getElementById("input-email").value;
  if (!inputEmail) {
    document.getElementById("emailHelp").textContent = "Please enter email";
  } else if (inputEmail.match(regex)) {
    console.log("oke");
    emailCheck.classList.add("d-none");
    personalInfo.classList.remove("d-none");
  } else {
    emailHelp.textContent = "Email không hợp lệ, xin vui lòng thử lại";
  }
});
/*---------***********************************************----------*/
/*---------* MOUSE OVER TITLE TO SHOW "VIEW MORE" BUTTON *----------*/
/*---------***********************************************--------- */
const btnsOpenCard = document.querySelectorAll(".open-view-more");
const hiddenViewButton = document.querySelectorAll(".hidden-view-button");
const cardContent = document.querySelectorAll(".card-content");
for (let i = 0; i < btnsOpenCard.length; i++) {
  btnsOpenCard[i].addEventListener("mouseover", function () {
    console.log("touch!!!");
    hiddenViewButton[i].classList.remove("d-none");
  });
  btnsOpenCard[i].addEventListener("mouseleave", function () {
    console.log("out!!!");
    hiddenViewButton[i].classList.add("d-none");
  });
  hiddenViewButton[i].addEventListener("click", function () {
    console.log("click!!");
    cardContent[i].classList.toggle("d-none");
    if (cardContent[i].classList.contains("d-none")) {
      hiddenViewButton[i].querySelector("p").innerHTML =
        "<p>&#9660; View more</p>";
    } else {
      hiddenViewButton[i].querySelector("p").innerHTML = "&#9650; View less";
    }
    // hiddenViewButton[i].querySelector("p").innerHTML = "&#9650; View less";
    // cardContent[i].classList.toggle("d-none");
  });
}
