import React, { useEffect, useState } from 'react'
import './login.css'

const Login = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' && password === ''){
            setError(true)
        }else{
            setError(false)
            props.setUser([name])
        }
    }

  return (
    <div>
        <h1>Ingreso</h1>
        <form className='form' onSubmit={handleSubmit} action="">
            <p>Usuario</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            {error && <p>El campo es requerido</p>}
            <p>Password</p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <p>El campo es requerido</p>}
            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login