const ACCESS_KEY = "mirabella-invitation-access-v1";
const PASSWORD_HASH = "e15f8c3cba82c788b2f29538220b32a90e1948b3169a69244b43f611f9cb7845";

const form = document.querySelector("#accessForm");
const passwordInput = document.querySelector("#accessPassword");
const errorMessage = document.querySelector("#accessError");

function unlockSite() {
  document.body.classList.remove("locked");
  document.querySelector("#accessGate").setAttribute("hidden", "");
}

async function hashPassword(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}

if (localStorage.getItem(ACCESS_KEY) === PASSWORD_HASH) {
  unlockSite();
} else {
  passwordInput.focus();
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  errorMessage.textContent = "";

  if (await hashPassword(passwordInput.value) === PASSWORD_HASH) {
    localStorage.setItem(ACCESS_KEY, PASSWORD_HASH);
    unlockSite();
    window.scrollTo({ top: 0 });
    return;
  }

  passwordInput.value = "";
  errorMessage.textContent = "That password didn’t work. Please try again.";
  passwordInput.focus();
});
