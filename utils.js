export function createUserInfoCell(value) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.innerText = value;

  return cell;
}

export function createRow(user) {
  const row = document.createElement('div');
  row.classList.add('row');

  const firstNameCell = createUserInfoCell(user.firstName);
  const lastNameCell = createUserInfoCell(user.lastName);
  const ageNameCell = createUserInfoCell(user.age);

  row.append(firstNameCell, lastNameCell, ageNameCell);

  return row;
}

export function clearElement(element) {
  element.innerHTML = '';
}
