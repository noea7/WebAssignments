"use strict";

const contactForm = document.querySelector("#contact-form");
const fullName = document.querySelector("#full-name");
const emailAddress = document.querySelector("#email-address");
const phoneNumber = document.getElementById("phone-number");
const contactMessage = document.querySelector("#contact-message");
const contacts = [];

contactForm.addEventListener("submit", (event) => {
    event.preventDefault;
    let fName = fullName.value;
    let email = emailAddress.value;
    let phone = phoneNumber.value;
    let msg = contactMessage.value;

    let contact = { fName, email, phone, msg };
    contacts.push(contact);
    console.log(contact);
})

