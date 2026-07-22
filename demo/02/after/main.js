const form = document.querySelector("#registration-form");
const successMessage = document.querySelector("#success-message");

const fields = [
  {
    input: document.querySelector("#name"),
    error: document.querySelector("#name-error"),
    emptyMessage: "名前を入力してください。",
  },
  {
    input: document.querySelector("#email"),
    error: document.querySelector("#email-error"),
    emptyMessage: "メールアドレスを入力してください。",
    invalidMessage: "メールアドレスの形式を確認してください。",
  },
];

function validateField(field) {
  const value = field.input.value.trim();
  let message = "";

  if (value === "") {
    message = field.emptyMessage;
  } else if (field.input.type === "email" && !field.input.validity.valid) {
    message = field.invalidMessage;
  }

  field.error.textContent = message;
  field.input.setAttribute("aria-invalid", String(message !== ""));

  return message === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.hidden = true;

  const results = fields.map(validateField);
  const firstInvalidField = fields.find((_, index) => !results[index]);

  if (firstInvalidField) {
    firstInvalidField.input.focus();
    return;
  }

  successMessage.hidden = false;
  successMessage.focus();
});
