// Function to show popup
function showPopup(popupId) {
  document.getElementById(popupId).style.display = "flex";
}

// Function to close popup
function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

// Event listeners for buttons
document
  .getElementById("loginBtn")
  .addEventListener("click", () => showPopup("loginPopup"));
document
  .getElementById("signupBtn")
  .addEventListener("click", () => showPopup("signupPopup"));

// Close popup on form submit
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  closePopup("loginPopup");
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  closePopup("signupPopup");
});
