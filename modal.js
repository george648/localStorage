import { addUser as addUserToTable } from './users.js';
import {data} from './data.js';
import {setItemToLocalStorage} from './setLocalStorage.js';

const MAX_SYMBOLS = 20;
const validationErrors = new Set();

const closeModalBtn = document.getElementById('closeBtn');
const modalBackdrop = document.getElementById('backdrop');
const cancelButton = document.getElementById('cancelBtn');
const modalContainer = document.getElementById('modalContainer');
const addUserBtn = document.getElementById('addUser');
const userNameInput = document.getElementById('userName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const usersContainer = document.getElementById('usersContainer');
const nameValidationError = document.getElementById('nameValidationError');
const lastNameValidationError = document.getElementById('lastNameValidationError');
const ageValidationError = document.getElementById('ageValidationError');

function areInputsNotEmpty() {
  return userNameInput.value.length
    && lastNameInput.value.length
    && ageInput.value.length;
}

function keydownListener(event) {
  if (event.code === 'Escape') {
    hideModalWindow();
  }
  if (event.code === 'Enter' && !validationErrors.size && areInputsNotEmpty()) {
    const firstName = userNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;

    addUserToTable({ firstName, lastName, age }, usersContainer);
    hideModalWindow();
  }
}



function hideModalWindow() {
  userNameInput.value = '';
  lastNameInput.value = '';
  ageInput.value = '';
  validationErrors.clear();
  nameValidationError.classList.remove('shown');
  lastNameInput.classList.remove('shown');
  ageValidationError.classList.remove('shown');
  modalContainer.classList.remove('modal-container__shown');
  window.removeEventListener('keydown', keydownListener);
}

export function showModalWindow() {
  modalContainer.classList.add('modal-container__shown');
  window.addEventListener('keydown', keydownListener);
}

const textInputHandler = (event) => {
  const error = event.target.nextElementSibling;

  if(event.target.value.length > MAX_SYMBOLS) {
    error.classList.add('shown');
    validationErrors.add(error);
  } else {
    error.classList.remove('shown');
    validationErrors.delete(error);
  }

  addUserBtn.disabled = !!validationErrors.size || !areInputsNotEmpty();
}

userNameInput.addEventListener('input', textInputHandler);

lastNameInput.addEventListener('input', textInputHandler);

ageInput.addEventListener('input', (event) => {
  if (isNaN(Number(event.target.value))) {
    ageValidationError.classList.add('shown');
    validationErrors.add(ageValidationError);
  } else {
    ageValidationError.classList.remove('shown');
    validationErrors.delete(ageValidationError);
  }

  addUserBtn.disabled = !!validationErrors.size || !areInputsNotEmpty();
})

closeModalBtn.addEventListener('click', hideModalWindow);
modalBackdrop.addEventListener('click', hideModalWindow);
cancelButton.addEventListener('click', hideModalWindow);
addUserBtn.addEventListener('click', () => {
  const firstName = userNameInput.value;
  const lastName = lastNameInput.value;
  const age = ageInput.value;

  addUserToTable({ firstName, lastName, age }, usersContainer);
  hideModalWindow();
  setItemToLocalStorage();
});
