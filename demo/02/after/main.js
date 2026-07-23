const form = document.querySelector("#registration-form");
const successToast = document.querySelector("#success-toast");
let displayTimer;
let transitionTimer;

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

function hideToast(immediately = false) {
  clearTimeout(displayTimer);
  clearTimeout(transitionTimer);
  successToast.classList.remove("is-visible");

  if (immediately) {
    successToast.hidden = true;
    return;
  }

  transitionTimer = setTimeout(() => {
    successToast.hidden = true;
  }, 300);
}

function showToast() {
  clearTimeout(displayTimer);
  clearTimeout(transitionTimer);
  successToast.hidden = false;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      successToast.classList.add("is-visible");
      displayTimer = setTimeout(() => {
        hideToast();
      }, 3000);
    });
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hideToast(true);

  const results = fields.map(validateField);
  const firstInvalidField = fields.find((_, index) => !results[index]);

  if (firstInvalidField) {
    firstInvalidField.input.focus();
    return;
  }

  form.reset();
  fields.forEach((field) => {
    field.error.textContent = "";
    field.input.setAttribute("aria-invalid", "false");
  });
  showToast();
});
