const openClassLeads = database.ref('openClassLeads');

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
  openClassLeads.push({
    timestamp: timestamp.toString(),
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    country: country_json.country_name,
    city: country_json.city,
    experience: form.experience.value,
    lead: form.lead.value,
    topics: form.topics.value
  });
  form.firstName.value = '';
  form.lastName.value = '';
  form.email.value = '';
  form.phone.value = '';
  form.experience.value = '';
  form.lead.value = '';
  form.topics.value = '';
  form.classList.add('hidden');
  thx.classList.remove('hidden');
}
