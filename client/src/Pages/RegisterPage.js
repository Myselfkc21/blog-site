import React, { useState } from 'react'

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function register(e) {
        e.preventDefault();
        fetch('http://localhost:4000/regist', {
            method: 'POST',
            body: JSON.stringfy({ username, password }),
            headers: { 'content-type': 'application/json' }
        })


    }
    return (

        <form className='register' action="">
            <h1>Register</h1>
            <input type="text"
                placeholder='username'
                value={username}
                onChange={(e) => { setUsername(e.target.value) }} />
            <input type="password"
                placeholder='password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }} />
            <button>Register</button>
        </form>

    )
}

export default RegisterPage
