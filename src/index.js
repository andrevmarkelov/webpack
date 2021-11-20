import './styles/styles.scss';

const form = document.querySelector("#my-form");
const invalidNumber = document.querySelector('#invalid_number');
const statusForm = document.querySelector('#status_form');
const modalWindow = document.querySelector('.modal-window');
const closeWindow = document.querySelector('#close_window');

const handleSubmit = (event) => {
    event.preventDefault();

    const regExp = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    const phone = document.querySelector('.phone').value;

    if (regExp.test(phone)) {
        let data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            statusForm.textContent = "Спасибо за заявку!";
            modalWindow.style.display = 'block';
            form.reset()
        }).catch(error => {
            statusForm.textContent = "Ой! При отправке формы возникла проблема";
            modalWindow.style.display = 'block';
        });
    } else {
        invalidNumber.textContent = 'Некорректный номер телефона!';
    }
}
form.addEventListener("submit", handleSubmit);

closeWindow.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})