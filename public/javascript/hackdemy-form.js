const leadsList = database.ref('hackdemy');

const form = document.querySelector('#hackdemy-form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm(event.target);
});


function validateForm(form){
  for(let input of form) {
    if(input.value == '') {
      errorMessage.classList.add('active');
      return
    }
  }
  sendForm(form);
}

function getFormatedDate() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const dateMonthYear  = date + "/" + (month+1) + "/" + year;
  return dateMonthYear;
}

function sendForm(form) {
  let formatedDate = getFormatedDate();
  leadsList.push({
    submitDate: formatedDate,
    name: form.name.value,
    email: form.email.value,
    type: form.type.value,
  });

  form.name.value = '';
  form.email.value = '';
  form.type.value = '';

  document.location.href = '/gracias.html';

}
