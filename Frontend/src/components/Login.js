import React from 'react';

function Login() {
    
     function log(){
        const login = document.getElementById('Login').value
        const password = document.getElementById('password').value
        const data = {
            login: login,
            password: password
        }
        console.log(data)
     }

     const api = 'http://localhost:9001/login'

     fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then((result) => {
            console.log(result)
            localStorage.setItem('token', result.token)
        })

    return (
        <>
            <h1>Login</h1>
            <input id ='Login' type='text' placeholder='Login'/>
            <input id ='password' type='password' placeholder='Password'/>
            <button onClick={log}>Login</button>
        </>
    )
}

export default Login;