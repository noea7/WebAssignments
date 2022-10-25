"use strict";
const reviewMessage = document.querySelector("#review-text");
const reviewAvatar = document.querySelector("#review-avatar");
const reviewName = document.querySelector("#review-name");
const reviewPosition = document.querySelector("#review-position");

let quoteNumber = Math.ceil(Math.random() * 10 + 1);
fetch(`https://testimonialapi.toolcarton.com/api/${quoteNumber}`)
    .then((response) => response.json())
    .then((data) => {
        reviewMessage.innerHTML = data.message;
        reviewName.innerHTML = data.name;
        reviewPosition.innerHTML = data.designation;
        reviewAvatar.src = data.avatar;
    });