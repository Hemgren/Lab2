document.getElementById('form').addEventListener('submit', function (event) {

    event.preventDefault();

    document.getElementById('firstNameError').textContent = ''; 
    document.getElementById('lastNameError').textContent = '';   
    document.getElementById('emailError').textContent = ''; 
    document.getElementById('capitalError').textContent = '';
    document.getElementById('statesError').textContent = '';
    document.getElementById('discoverError').textContent = '';



    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const capital = document.querySelector('input[name="capital"]:checked');
    const states = document.querySelectorAll('input[name="states"]:checked');

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const discover = document.getElementById('discover').value;


    let valid = true;

    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        valid = false;
    } else if (!namePattern.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First name must contain only letters.';
        valid = false;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        valid = false;
    } else if (!namePattern.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last name must contain only letters.';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }
      
    if (!capital) {
        document.getElementById('capitalError').textContent = 'Please select your guess';
        valid = false;
    } else { 
        document.getElementById('capitalError').textContent = '';
    } 

    if (states.length === 0) {
        document.getElementById('statesError').textContent = 'Please select at least one option';
        valid = false;
    } else { 
        document.getElementById('statesError').textContent = '';
    } 

    if (discover === '') {
        document.getElementById('discoverError').textContent = 'Answer is required';
        valid = false;
    }

    if (valid) {
        alert('Quiz Submitted!')
    }
});