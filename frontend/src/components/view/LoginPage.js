import React, { Component } from "react";
import item from './item';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            currentUser: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        if (this.props.isLoggedIn === false) {
            return (
                <div className='LoginPage-container'>
                    <form onSubmit={() => this.props.signIn(this.state.username, 
                                this.state.password)}>
                        <input 
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.changeHandler}
                        />
                        <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />
                        <button 
                            onClick={() => this.props.signIn(this.state.username, 
                                this.state.password)}
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            );
        }
    }
}

export default LoginPage;