import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        axios.post('http://localhost:3000/sessions', {
            user: {
                email: email,
                password: password
            }
        },
        {withCredentials: true}
        ).then(response => {
            if (response.data.logged_in) {
                this.props.handleLogin(response.data);
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' value={this.state.email} placeholder='Enter in your email.' onChange={this.handleChange} />
                    <input type='password' name='password' value={this.state.password} placeholder='Enter password' onChange={this.handleChange} />
                    <input type='submit' value='Login' />
                </form>

                <span>Don't have an account? Register <a href='/registration'>here</a>.</span>
            </div>
        )
    }
}

export default Login;