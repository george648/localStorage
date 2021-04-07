import {data} from './data.js'

const userNameInput = document.getElementById('userName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');

function setItemToLocalStorage() {
    const firstName = userNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    data.push({firstName, lastName, age});
    localStorage.setItem( 'users', JSON.stringify(data))
}

export {setItemToLocalStorage}