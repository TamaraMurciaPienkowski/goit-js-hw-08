import myFunction from '../../node_modules/lodash.throttle';
const form = document.querySelector('.feedback-form');
const logData = {
  email: '',
  message: '',
};
function inputData(e) {
  logData[e.target.name] = e.target.value;
  myFunction(
    localStorage.setItem('feedback-form-state', JSON.stringify(logData)),
    500
  );
}

form.addEventListener('input', inputData);

function fillInput() {
  const inputFilling = localStorage.getItem('feedback-form-state');
  const parsedFilling = JSON.parse(inputFilling);
  if ((parsedFilling.email !== '') & (parsedFilling.message !== '')) {
    form.email.value = parsedFilling.email;
    form.message.value = parsedFilling.message;
  } else {
    form.email.value = '';
    form.message.value = '';
  }
}

fillInput();

function cleaner() {
  localStorage.clear();
}

form.addEventListener('submit', cleaner);
