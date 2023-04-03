//your JS code here. If required.
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const btn = document.querySelector('#btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = nameInput.value;
  const age = ageInput.value;
  
  if (!name || !age) {
    alert('Please enter both your name and age.');
    return;
  }
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
  
  promise
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
