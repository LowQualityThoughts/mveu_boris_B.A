import React from 'react';

function Regist() {
    function Reg(){
        const login = document.getElementById('Login').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value
        const data = {
            login: login,
            password: password,
            email: email
        }
        console.log(data)

        const api = 'http://http://localhost:9001/registration'

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
        })
     }
    return (
        <>
        <h1>Regist</h1>
        <input id ='Login' type='text' placeholder='Login'/>
        <input id ='password' type='password' placeholder='Password'/>
        <input id ='email' type='email' placeholder='email'/>
        <button onClick={Reg}>Save</button>
        </>
    )
}

export default Regist;