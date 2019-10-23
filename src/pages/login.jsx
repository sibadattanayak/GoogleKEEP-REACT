import React, { Component } from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'
import {login} from '../services/userservice'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            snackBarMsg: '',
            openSnackBar: false,
        }
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
        if (this.state.userEmail === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "userEmail cannot be empty"
            })
        }
        else if (this.state.userPassword === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "userPassword cannot be empty"
            })
        }
        else {
            let data={
                "userEmail":this.state.userEmail,
                "userPassword":this.state.userPassword
            }
            console.log("loginComponent",data)
            login(data).then(res=>{
                console.log(res)
                localStorage.setItem('token', res.data.description);
                console.log("TOKEN",localStorage.getItem('token'));
                this.props.history.push('/dashboard')
                
            }).catch(err=>{
                console.log("Error after hitting login api  ",err);
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
                    <h1>
                        Fundoo Login
                </h1>
                    <TextField
                        id="userEmail"
                        placeholder="Email"
                        variant="outlined"
                        value={this.state.userEmail}
                        onChange={this.handleuserEmail}
                    /> <br /> <br /> <br />
                    <TextField
                        id="userPassword"
                        placeholder="Password"
                        variant="outlined"
                        value={this.state.userPassword}
                        onChange={this.handleuserPassword}
                    /> <br /> <br /> <br />
                    <Button onClick={this.handleSubmit}>Login</Button>
                    <div > <a href="/register"></a></div>
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