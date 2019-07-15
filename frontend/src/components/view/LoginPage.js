import React, { Component } from 'react';
import './LoginPage.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: false,
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            username: '',
            password: ''
        }
    }

    toggleSignUp = () => {
        if (this.state.newUser === false) {
            this.setState({ newUser: true });
        }
        else {
            this.setState({ newUser: false });
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    formNewUser = () => {
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        this.props.addUser(newUser);
        this.setState({ newUser: false });
        alert('Welcome to BucketList!');
    }

    render() {
        if (this.state.newUser === false) {
            return (
                <div className='LoginPage-container'>
                    <div className='LoginPage-fields'>
                        <form>
                            <input
                                className='username-field'
                                type='text'
                                name='username'
                                placeholder='Username'
                                value={this.props.username}
                                onChange={this.props.changeHandler}
                            />
                            <input
                                className='password-field'
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.props.password}
                                onChange={this.props.changeHandler}
                            />
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className='LoginPage-text'>
                        <h2 className='intro-header'>
                        Welcome to BucketList!
                        </h2>
                        <p className='intro-body'>
                            Sign up today to start creating 
                            your own bucket list!
                        </p>
                        <p onClick={this.toggleSignUp}>Sign Up!</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='LoginPage-signup-form'>
                    <div className='signup-form'>
                        <form onSubmit={this.formNewUser}>
                            <input
                                className='signup-fields'
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                value={this.state.firstName}
                                onChange={this.changeHandler} 
                            />
                            <input
                                className='signup-fields'
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                value={this.state.lastName}
                                onChange={this.changeHandler}  
                            />
                            <input
                                className='signup-fields'
                                type='text'
                                name='age'
                                placeholder='Age'
                                value={this.state.age}
                                onChange={this.changeHandler}  
                            />
                            <input
                                className='signup-fields'
                                type='text'
                                name='email'
                                placeholder='Email Address'
                                value={this.state.email}
                                onChange={this.changeHandler} 
                            />
                            <input
                                className='signup-fields'
                                type='text'
                                name='username'
                                placeholder='Username'
                                value={this.state.username}
                                onChange={this.changeHandler} 
                            />
                            <input
                                className='signup-fields'
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.changeHandler} 
                            />
                            <button onClick={this.formNewUser}>Sign Up!</button>
                        </form>
                    </div>
                    <p className='intro-body'>
                        Sign up today to start creating 
                        your own bucket list!
                    </p>
                </div>
            );
        }
    }
};

export default LoginPage;