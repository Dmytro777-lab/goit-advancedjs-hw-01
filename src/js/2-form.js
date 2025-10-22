const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  formData = { email, message };

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Sending data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData = { email: '', message: '' };
});
