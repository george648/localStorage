import { data as users } from './data.js';
import { showUsers } from './users.js'
import { showModalWindow } from './modal.js';

const usersContainer = document.getElementById('usersContainer');
const openAddUserModal = document.getElementById('openAddUserModal');
const filterUsersByAge = document.getElementById('filterUsersByAge');
const showAllUsers = document.getElementById('showAllUsers');

showUsers(users, usersContainer);

openAddUserModal.addEventListener('click', () => {
  showModalWindow();
});

filterUsersByAge.addEventListener('click', () => {
  const filteredUsers = users.filter((user) => user.age > 18);

  showUsers(filteredUsers, usersContainer);
});

showAllUsers.addEventListener('click', () => {
  showUsers(users, usersContainer);
});

