var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,60}$/;
var email = $('#registracia input[name=email]');
var firstName = $('#registracia input[name=first_name]');
var lastName = $('#registracia input[name=last_name]');
var password = $('#registracia input[name=password]');
var confirmedPassword = $('#registracia input[name=confirm_password]');
var submitButton = $('#registracia button[type=submit]');


email.on('keyup change', emailValidation);
firstName.on('keyup change', firstNameValidation);
lastName.on('keyup change', lastNameValidation);
password.on('keyup change', passwordValidation);
confirmedPassword.on('keyup change', confirmedPasswordValidation);
submitButton.on('click', function () {
    var result = emailValidation();
    result = firstNameValidation() && result;
    result = lastNameValidation() && result;
    result = passwordValidation() && result;
    result = confirmedPasswordValidation() && result;
    return result;
});

function emailValidation() {
    if (!email.val()) {
        email.parent().addClass('has-error');
        email.next().html('სავალდებულოა');
        return false;
    } else if (!email.val().match(emailRegex)) {
        email.parent().addClass('has-error');
        email.next().html('არასწორი ფოსტა');
        return false;
    } else {
        email.parent().removeClass('has-error');
        email.next().html('');
        return true;
    }
}

function firstNameValidation() {
    if (!firstName.val()) {
        firstName.parent().addClass('has-error');
        firstName.next().html('სავალდებულოა');
        return false;
    } else if (firstName.val().length < 3) {
        firstName.parent().addClass('has-error');
        firstName.next().html('მინიმუმ 3 სიმბოლო');
        return false;
    } else {
        firstName.parent().removeClass('has-error');
        firstName.next().html('');
        return true;
    }
}
function lastNameValidation() {
    if (!lastName.val()) {
        lastName.parent().addClass('has-error');
        lastName.next().html('სავალდებულოა');
        return false;
    } else if (lastName.val().length < 3) {
        lastName.parent().addClass('has-error');
        lastName.next().html('მინიმუმ 3 სიმბოლო');
        return false;
    } else {
        lastName.parent().removeClass('has-error');
        lastName.next().html('');
        return true;
    }
}
function passwordValidation() {
    if (!password.val()) {
        password.parent().addClass('has-error');
        password.next().html('სავალდებულოა');
        return false;
    } else if (password.val().length < 8) {
        password.parent().addClass('has-error');
        password.next().html('მინიმუმ 8 სიმბოლო');
        return false;
    } else {
        password.parent().removeClass('has-error');
        password.next().html('');
        return true;
    }
}
function confirmedPasswordValidation() {
    if (!confirmedPassword.val()) {
        confirmedPassword.parent().addClass('has-error');
        confirmedPassword.next().html('სავალდებულოა');
        return false;
    } else if (confirmedPassword.val() != password.val()) {
        confirmedPassword.parent().addClass('has-error');
        confirmedPassword.next().html('პაროლი არ ემთხვევა');
        return false;
    } else {
        confirmedPassword.parent().removeClass('has-error');
        confirmedPassword.next().html('');
        return true;
    }
}