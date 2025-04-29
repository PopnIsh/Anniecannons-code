// --- Login Form ---
const loginForm = document.getElementById("login-form");
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
