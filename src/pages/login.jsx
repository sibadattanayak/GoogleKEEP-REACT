import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core';
import { login } from '../services/userservice';
import validator from 'email-validator';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            snackBarMsg: '',
            openSnackBar: false,
            validator
        }
    }


    validateEmail() {
        var emailPattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";
        
        return emailPattern.test(this.state.userEmail);
    }

    handleuserEmail = (event) => {
        this.setState({
            userEmail: event.target.value
        })
    }
    handleuserPassword = (event) => {
        this.setState({
            userPassword: event.target.value
        })
    }
    handleSubmit = () => {
        if (this.state.userEmail === '' || this.validateEmail === false) {
            // || this.validator.validate(this.state.userEmail)

            this.setState({
                openSnackBar: true,
                snackBarMsg: "Invalid Email"
            })
        }
        else if (this.state.userPassword === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Password cannot be empty"
            })
        }
        else {
            let data = {
                "userEmail": this.state.userEmail,
                "userPassword": this.state.userPassword
            }
            console.log("loginComponent==> ", data)
            login(data).then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.data);
                console.log("TOKEN", localStorage.getItem('token'));
                this.props.history.push('/dashboard')

            }).catch(err => {
                console.log("Error after hitting login api  ", err);
            })
        }
    }
    handleClose = () => {
        this.setState({
            openSnackBar: false
        })
    }
    render() {
        return (
           <div className="login-container">

                <Card className="login-card">
                    <div>
 
                        <img className="loginImage" src={require('../assets/images/login.png')} />

                        <h1>
                            Fundoo Login
                        </h1>
                        <div className="loginEmail">
                            <TextField
                                required
                                fullWidth
                                type="email"
                                id="userEmail"
                                placeholder="example@gmail.com"
                                variant="outlined"
                                value={this.state.userEmail}
                                onChange={this.handleuserEmail}
                            /></div>
                        <div className="loginPassword">
                            <TextField type="password"
                                required
                                id="userPassword"
                                placeholder=" * * * * * * * * * * * * * * "
                                variant="outlined"
                                value={this.state.userPassword}
                                onChange={this.handleuserPassword}
                            /></div>
                        <div className="loginButton">
                            <Button size="small" variant="contained" color="primary" onClick={this.handleSubmit}>Login</Button>
                        </div>
                        <div className="linkDiv">
                            <a href="/registration">Registration</a>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <a href="/forgotpassword">Forgot Password</a>

                        </div>
                    </div>
                </Card>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{this.state.snackBarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}
                        >
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}