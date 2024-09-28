const form = document.querySelector('.feedback-form');
const submit = document.querySelector('button');
const localData = JSON.parse(localStorage.getItem('feedback-form-state'));

const formData = {
  email: '',
  message: '',
};

//localstoragede veri varsa formun içine yazmak için
function fillData(localStorage) {
  if (localStorage) {
    form.elements.email.value = localStorage.email;
    form.elements.message.value = localStorage.message;

    formData.email = localStorage.email;
    formData.message = localStorage.message;
  }
}

fillData(localData);

//forma girilen inputları localstoragede saklamak için
form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

//form submit edilince içeriği temizlemek için
submit.addEventListener('click', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Lütfen bütün alanları doldurunuz');
  }

  console.log(formData);
  form.reset();
  localStorage.clear();
  formData.email = '';
  formData.message = '';
});
