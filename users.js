import { createRow, clearElement } from './utils.js';
import { data as users } from './data.js';

export function showUsers(users, appendTo) {
  clearElement(appendTo);
  const rows = users.map((user) => createRow(user));

  appendTo.append(...rows);
}

export function addUser(user, appendTo) {
  users.push(user);
  const row = createRow(user);

  appendTo.append(row);
}
