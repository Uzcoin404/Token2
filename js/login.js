const login = document.querySelector('.after__login');
const loginBtn = document.querySelector('.after__login').querySelector('.loginBtn');
const verify = document.querySelector('.verify');


function Login(e) {
    e.preventDefault();
    login.classList.add('d-none')
    verify.classList.remove('d-none')
}


loginBtn.addEventListener('click', Login)