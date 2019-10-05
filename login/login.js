const user = 
    {email: 'martinlopez@gmail.com',
    password: '1234'}

const validateUser = () => {
    const inputEmail = document.getElementById('email').value
    const inputPass = document.getElementById('password').value
    const loginButton = document.getElementById('loginButton')
 
    if (user.email === inputEmail && user.password === inputPass ){
        loginButton.href = "../dashboard/dashboard.html"  
    }else{
      alert('Chequea tus datos') 
    }
}

