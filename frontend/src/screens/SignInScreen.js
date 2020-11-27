import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export const SignInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <form className="form" onSubmit={ submitHandler }>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter email" 
                        required
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter password" 
                        required
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Submit
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer? {' '}
                        <Link to='/register'>Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}