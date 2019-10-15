const leadsList = database.ref('leads');

const forms = document.querySelectorAll('.program-form');
const errorMessage = document.querySelector('.error-message');
const thxs = document.querySelectorAll('.thx-message');
for(let form of forms) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm(event.target);
  });
}


function validateForm(form){
  let phoneCounter = form.phone.value.toString();
  console.log(phoneCounter);
  console.log(form.phone.value);
  if(phoneCounter.length < 8) {
    errorMessage.innerText = 'El teléfono debe tener al menos 8 números';
    errorMessage.classList.add('active');
    return
  }
  for(let input of form) {
    if(input.value == '') {
      errorMessage.innerText = 'No puedes dejaer campos vacios';
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
  console.log(dateMonthYear);
  return dateMonthYear;
}

function sendForm(form) {
  let formatedDate = getFormatedDate();
  leadsList.push({
    formName: form.formName.value,
    submitDate: formatedDate,
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    city: form.city.value,
    program: form.program.value,
  });

  form.name.value = '';
  form.email.value = '';
  form.phone.value = '';
  form.city.value = '';
  form.program.value = '';

  for(let form of forms) {
    form.classList.add('hidden');
  }
  for(let thx of thxs) {
    thx.classList.remove('hidden');
  }

  document.location.href = '/gracias.html';

  gtag('event', 'submit', {
    'event_category': 'Application Form'
  });

}
