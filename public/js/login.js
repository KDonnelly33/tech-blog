// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };
  
//   const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (username && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ username, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to sign up.');
//       }
//     }
//   };
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);
  
//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);

// add event listener to save-button as id
// funtion to handle login

const handleLogin = async () => {
    event.preventDefault();
    console.log("login running")
    //get all of the input values
const username = document.getElementById('#username-signup').value.trim();
const email = document.getElementById('#email-signup').value.trim();
const password =document.getElementById('#password-signup').value.trim();
if(username && email && password){
    // validate that its an email
    
const response = await fetch('api/users/', 
{method:'POST', 
body: JSON.stringify({username,email,password}),
headers: { 'Content-Type': 'application/json' }}
) 
console.log(response)
if(response.ok){
    document.location.replace("/homepage")
}
}
}
// if(response.ok){
//     document.location.replace("/dashboard")
// }
//validate that the user did put something in those values

//we could validate that password is at least 8 characters 

//we could validate that the email input is an email




document.getElementById("save-button").addEventListener("click",handleLogin)
