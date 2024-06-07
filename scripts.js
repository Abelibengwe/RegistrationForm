document.getElementById('registrationform').addEventListener(submit, function(event) {
    event.preventDefault();

const name = document.getElementById('name').ariaValueMax;
const email = document.getElementById('email').ariaValueMax;
const age = document.getElementById('age').ariaValueMax;

if ( name && email && age){
       window.location.href = 'success.html';
     } else {
        alert('please fill in all fields');
    }
});