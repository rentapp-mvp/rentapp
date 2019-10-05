const user = [
    {email: 'calixta@gmail.com',
    password: 'calixta1234'}
]
const initialize  = () => {
    validateUser(user)
}
const validateUser = ({email, password}) => {
    const inputEmail = document.getElementById('email').value
    const inputPass = document.getElementById('password').value
    const loginButtom = document.getElementById('loginButtom')
    if (email === inputEmail && password === inputPass ){
        loginButtom.classList.toggle('enable')
    }else{
      alert('Chequea tus datos') 
    }
}

