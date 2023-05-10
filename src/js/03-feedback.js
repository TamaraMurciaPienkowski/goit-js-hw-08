import myFunction from '../../node_modules/lodash.throttle';
const form = document.querySelector('.feedback-form');
const logData = {
  email: '',
  message: '',
};

const inputData = myFunction(e => {
  logData['email'] = form.email.value;
  logData['message'] = form.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(logData));
}, 500);

function fillInput() {
  const inputFilling = localStorage.getItem('feedback-form-state');
  const parsedFilling = JSON.parse(inputFilling);
  if (parsedFilling) {
    form.email.value = parsedFilling.email;
    form.message.value = parsedFilling.message;
  } else {
    form.email.value = '';
    form.message.value = '';
  }
}

fillInput();
form.addEventListener('input', inputData);
function cleaner() {
  localStorage.clear();
}

form.addEventListener('submit', cleaner);
