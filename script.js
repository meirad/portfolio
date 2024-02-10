function contact() {
    let btnSend = document.querySelector('.btn-Send');

    btnSend.addEventListener('click', function(event) {
        event.preventDefault(); 

        let fullname = document.querySelector('.input.btn-name');
        let email = document.querySelector('.input.btn-emaill');
        let phoneNumber = document.querySelector('.input.btn-numbert');
        let contacts = document.querySelector('.input.btn-contact');

        let emailRegex = /\S+@\S+\.com/i;
        let phoneRegex = /^\+?\d*$/;

        if (fullname.value.trim() === '' || email.value.trim() === '' || !emailRegex.test(email.value) || phoneNumber.value.trim() === '' || !phoneRegex.test(phoneNumber.value) || contacts.value.trim() === '') {
            alert('Please fill in the form correctly');
        } else {
           
            localStorage.setItem('fullname', fullname.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('phoneNumber', phoneNumber.value);
            localStorage.setItem('contacts', contacts.value);

            alert('Form submitted successfully');
            fullname.value = '';
            email.value = '';
            phoneNumber.value = '';
            contacts.value = '';
        }
    });
}


function projects() {
let htmlProject = document.querySelector('.porgects-html');
let htmlbtn = document.querySelector('.htmlbtn');

let jsProject = document.querySelector('.porgects-js');
let jsbtn = document.querySelector('.jsbtn');
jsProject.style.display = 'none'; 

    htmlbtn.addEventListener('click', function() {
        htmlProject.style.display = 'block';
        jsProject.style.display = 'none';
    });

    jsbtn.addEventListener('click', function() {
        jsProject.style.display = 'block';
        htmlProject.style.display = 'none';
    });
}

window.onload = function() {
    contact();
    projects();
}