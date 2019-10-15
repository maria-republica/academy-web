const leadsList = database.ref('becas6');

const form = document.querySelector('#becas-form');
const thx = document.querySelector('.thx-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendForm(event.target);
});

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
    submitDate: formatedDate,
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    city: form.city.value,
    why: form.why.value,
    motivation: form.motivation.value,
    personality: form.personality.value,
    age: form.age.value,
    program: form.program.value,
    experience: form.experience.value,
    work: form.work.value,
    ocupation: form.ocupation.value,
    challenge: form.challenge.value,
    fun: form.fun.value,
    disponibility: form.disponibility.value,
  });
  form.firstName.value = '';
  form.lastName.value = '';
  form.email.value = '';
  form.phone.value = '';
  form.city.value = '';
  form.why.value = '';
  form.personality.value = '';
  form.age.value = '';
  form.motivation.value = '';
  form.program.value = '';
  form.experience.value = '';
  form.work.value = '';
  form.ocupation.value = '';
  form.challenge.value = '';
  form.fun.value = '';
  form.disponibility.value = '';
  form.classList.add('hidden');
  thx.classList.remove('hidden');
}
