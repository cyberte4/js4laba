'use strict'

function createNewUser() {
  let firstName = prompt('Введіть ім`я');
  let lastName = prompt('Введіть фамілію');
  const newUser = {
    firstName,
    lastName,
    getLogin () {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    }
  };

  return newUser;
}

const user = createNewUser();
console.log(user.getLogin());
