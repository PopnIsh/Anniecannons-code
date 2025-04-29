// --- Contact Form ---
let contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", onContactFormSubmit);

function onContactFormSubmit(event) {
  event.preventDefault();

  // Getting form data
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  //Selecting name and crafting thank you message
  const name = dataObject.name;
  const message = `Thank you, ${name}. We have received your inquiry.`;

  // Displaying thank you message
  const thankYou = document.createElement("p");
  thankYou.textContent = message;
  document.querySelector("main").appendChild(thankYou);

  // Resetting and removing the form
  contactForm.reset();
  contactForm.remove();
}

// --- Login Form ---
const loginForm = document.getElementById("#login-form");
loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  // Getting form data
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  const name = dataObject.name;
  const message = `Welcome, ${name}! You are logged in!`;

  // Displaying welcome message
  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = message;
  document.querySelector("main").appendChild(welcomeMessage);

  // Resetting and removing the form
  loginForm.reset();
  loginForm.remove();
}
