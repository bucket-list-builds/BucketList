import React, {Component} from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// import './SASS/index.scss';


class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }
 

    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://bucketlist-builds.herokuapp.com/api/auth/register', this.state)
          .then(res => {
              console.log(this.props)
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/login');
          }).catch(err => {
            console.log(err);
          })
        this.setState({
          username: "",
          password: "",
        })
      }

    render() {
        return (
            <div>
                <p>To sign up, please enter a user name, password, and accept the terms of condtion.</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Name</label>
                        <input 
                            type = "text" 
                            placeholder="Enter a User Name here"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />

                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type = "password" 
                            placeholder="Enter a Password here"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        
                   
                        <button>Sign Up</button>

                    </div>
                </form>
            </div>
        )
    }
}




export default RegistrationPage;