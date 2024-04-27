let formData = { email: "", message: "" };

function saveData() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (data) {
    formData = data;
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

function validateForm() {
  const email = formData.email.trim();
  const message = formData.message.trim();
  if (email === "" || message === "") {
    alert("Fill please all fields");
    return false;
  }
  return true;
}

document.querySelector('.feedback-form').addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value;
  saveData();
});

document.querySelector('.feedback-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "" };
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
  }
});