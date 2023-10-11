function submitForm() {
    let nameInput = document.getElementById("nameInput");
    let phoneInput = document.getElementById("phoneInput");

    let name = nameInput.value;
    let phone = phoneInput.value;

    if (name.trim() === "" || phone.trim() === "") {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    let nameReg = /^[А-Яа-я\s]+$/;
    if (!nameReg.test(name)) {
        alert("введите корректное имя (только буквы и пробелы)");
        return;
    }

    let phoneReg = /^\+375\s?\d+$/;
    if (!phoneReg.test(phone)) {
        alert("введите корректный номер телефона (+375 и цифры)");
        return;
    }

    alert("Форма отправлена!\nИмя: " + name + "\nТелефон: " + phone);

    nameInput.value = "";
    phoneInput.value = "";

}
