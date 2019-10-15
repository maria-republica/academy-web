const microcursosLeads = database.ref('microcursosLeads');

const form = document.querySelector('#program-form');
const thx = document.querySelector('.thx-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendForm(event.target);
});

async function sendForm(form) {
  let timestamp = new Date();
  const country = await fetch("https://freegeoip.app/json/");
  const country_json = await country.json();
  microcursosLeads.push({
    timestamp: timestamp.toString(),
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    country: country_json.country_name,
    city: country_json.city,
    lead: form.lead.value,
    course: form.course.value
  });
  form.firstName.value = '';
  form.lastName.value = '';
  form.email.value = '';
  form.phone.value = '';
  form.lead.value = '';
  form.course.value = '';
  form.classList.add('hidden');
  thx.classList.remove('hidden');
}
