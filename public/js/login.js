const handleLogin = async () => {
    event.preventDefault();
    console.log("login running")
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if(email && password){
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    console.log(response)
    if(response.ok){
        document.location.replace("/dashboard")
    }
}
}



const handleSignup = async () => {
    event.preventDefault();
    console.log("login running")
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if(username && email && password){
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    console.log(response)
    if(response.ok){
        document.location.replace("/dashboard")
    }else{
        alert("Failed to sign up")
    }
    
}
}

document.getElementById("login-button").addEventListener("click",handleLogin);
document.getElementById("signup-button").addEventListener("click",handleSignup);



