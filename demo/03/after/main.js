const form = document.querySelector("#registration-form");
const formPanel = document.querySelector("#form-panel");
const successMessage = document.querySelector("#success-message");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const fields = [
  {
    input: nameInput,
    error: document.querySelector("#name-error"),
    emptyMessage: "名前を入力してください。",
  },
  {
    input: emailInput,
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

for (const field of fields) {
  field.input.addEventListener("input", () => {
    if (field.input.getAttribute("aria-invalid") === "true") {
      validateField(field);
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const results = fields.map(validateField);
  const firstInvalidField = fields.find((_, index) => !results[index]);

  if (firstInvalidField) {
    firstInvalidField.input.focus();
    return;
  }

  formPanel.hidden = true;
  successMessage.hidden = false;
  successMessage.focus();
});
