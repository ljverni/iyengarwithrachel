// Create the modal HTML
const modalHTML = `
  <div id="password-overlay">
    <div class="password-modal">
      <h2>Enter Password</h2>
      <input type="password" id="password-input" placeholder="Password">
      <button onclick="checkPassword()">Enter</button>
      <p id="error-message"></p>
    </div>
  </div>
`;

// Inject the modal into the body
document.body.insertAdjacentHTML("beforeend", modalHTML);

// Style overlay when needed
const CORRECT_PASSWORD = "yogasecret"; // Change as needed

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-message");
  if (input === CORRECT_PASSWORD) {
    document.getElementById("password-overlay").style.display = "none";
    localStorage.setItem("unlocked", "true");
  } else {
    error.textContent = "Incorrect password. Try again.";
  }
}

window.onload = () => {
  if (localStorage.getItem("unlocked") !== "true") {
    document.getElementById("password-overlay").style.display = "flex";
  }
};
