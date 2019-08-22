const { register } = document.forms;
const { firstName, lastName, email, password } = register;

function errorPrompt(field) {
  field.parentNode.parentNode.classList.add('error');
  field.focus();
  setTimeout(() => {
    field.parentNode.parentNode.classList.remove('error');
  }, 2000);
}

register.onsubmit = (e) => {
  e.preventDefault();
  if (!firstName.value) errorPrompt(firstName);
  else if (!lastName.value) errorPrompt(lastName);
  else if (!email.value) errorPrompt(email);
  else if (!password.value) errorPrompt(password);
  else {
    register.submit();
  }
};
