const formToggle_form = document.querySelector('.package-toggle');
const packageOptions = document.querySelector('.package-menu');
const userEmail = document.getElementById('Email-input');
const userName = document.getElementById('name-input')
const submitBtn = document.querySelector('.form-btn');
const incorrectMessage = document.querySelector('.error-message')

function invalidEmail(){
  if (userEmail.value !== '') {
    userEmail.value = ''
  }

  if (userEmail.value !== 'example.user123@email.com') {
    userEmail.style.borderBottom = ' 1px solid #e74c3c'
    incorrectMessage.style.display = 'block'
  }

  if (userName.value !== '') {
    userName.value = ''
  }
}

function selectPackage() {
  if (formToggle_form.classList.toggle('active')){ 
    packageOptions.style.display = 'block'
  } else {
    packageOptions.style.display = 'none'
  }
}




submitBtn.addEventListener('click', function(){
 invalidEmail()
})

formToggle_form.addEventListener('click', function(){
  selectPackage()
})