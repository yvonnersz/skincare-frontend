import React from 'react';
import axios from 'axios';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password, password_confirmation} = this.state;

        axios.post('http://localhost:3000/registrations', {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        {withCredentials: true}
        ).then(response => {
            if (response.data.status === 'created') {
                this.handleSuccessfulAuth(response.data);
            }
        })
    }

    handleSuccessfulAuth(data) {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' value={this.state.email} placeholder='Enter your email.' onChange={this.handleChange} required />
                    <input type='password' name='password' value={this.state.password} placeholder='Enter your password.' onChange={this.handleChange} />
                    <input type='password' name='password_confirmation' value={this.state.password_confirmation} placeholder='Confirm your password.' onChange={this.handleChange} />
                    <input type='submit' value='Register' />
                </form>
            </div>
        )
    }
}

export default Registration;