/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */
/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/


/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



// Task1
document.getElementById('username').insertAdjacentHTML('beforebegin', '<label for="username">Username</label>');
document.getElementById('password').insertAdjacentHTML('beforebegin', '<label for="password">Password</label>');
document.getElementById('confirmPassword').insertAdjacentHTML('beforebegin', '<label for="confirmPassword">Confirm Password</label>');

// Task 2
const checkField = (event) => {
    // check if error is already rendered
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'))
    if(errorElement.length === 0) {
        event.target.value.length > 0 ? null : document.getElementById(event.target.id).insertAdjacentHTML('afterEnd', `<span style="color:red">${event.target.id} blank</span>`);    
    // if error already rendered but value is now available then remove
    } else if(errorElement.length > 0 && event.target.value.length > 0) {
        event.target.parentNode.removeChild(errorElement[0])
    }
}
// blur: The blur event occurs when the <input> field loses focus
document.getElementById('username').addEventListener('blur', checkField)
document.getElementById('password').addEventListener('blur', checkField)
document.getElementById('confirmPassword').addEventListener('blur', checkField)

// Task 3
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

confirmPassword.addEventListener('blur', (event) => {
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'))
    if(errorElement.length === 0 && event.target.value !== password.value) {
        event.target.insertAdjacentHTML('afterEnd', `<span style="color:red">Passwords don't match</span>`)
    } else if(errorElement.length > 1 && event.target.value === password.value) {
        event.target.parentNode.removeChild(errorElement[0])
    }
})

// Task 4
const btn = document.querySelector('button')
btn.setAttribute('disabled', 'true')
document.getElementById("registrationForm").addEventListener('change', (event) => {
    const inputFields = Array.from(document.querySelectorAll('input')).every((inputField) => inputField.value ? inputField.value.length > 0 ? true : false : false)
    console.log(inputFields);
    if(inputFields) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'true')
    }
})

// Task 5
const form = document.getElementById("registrationForm");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success');
    alert.innerText = 'User registered successfully';
    form.prepend(alert);
})
