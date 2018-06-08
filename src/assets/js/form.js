const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,14}$/;

var type = [
    {
        type: 'email',
        regex: EMAIL_REGEX
    },
    {
        type: 'password',
        regex: PASSWORD_REGEX
    },
];

function onSubmit_login() {
    if (document.form_login.email.value != "" & document.form_login.password.value != "") {
        if (!EMAIL_REGEX.test(document.form_login.email.value)) {
            return false;
            console.log('faux')
        } else if (!PASSWORD_REGEX.test(document.form_login.password.value)) {
            return false;
        } else {
            return true;
            console.log('vrai')
        }
    } else {
        return false;
    }
}