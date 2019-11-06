import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'
import { registration } from '../services/userservice';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            snackBarMsg: '',
            openSnackBar: false,
        }
    }

    handlefirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handlelastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleemail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = () => {

        if (this.state.firstName === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "First Name cannot be empty"
            })
        }

        else if (this.state.lastName === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Last Name cannot be empty"
            })
        }
        else if (this.state.email === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "email cannot be empty"
            })
        }
        else if (this.state.password === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Password cannot be empty"
            })
        }
        else {
            let data = {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "password": this.state.password
            }
            console.log("registrationComponent data", data)
            registration(data).then(res => {
                console.log("Response after hitting registration api >> ", data);
                this.props.history.push('/')

            }).catch(error => {
                console.log("Error after hitting registration api  ", error);
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
            <div className="registration-container">
                {/* <div className="regImage">
                            <img src={require('../assets/images/registration.png')} />
                        </div> */}
                <Card className="registration-card">
                    <div>
                        
                        <h1>
                            Fundoo Registration
                    </h1>
                        <div className="regFName">
                            <TextField
                                required
                                id="firstName"
                                placeholder="First Name"
                                variant="outlined"
                                value={this.state.firstName}
                                onChange={this.handlefirstName}
                            /></div>
                        <div className="regLName">
                            <TextField
                                id="lastName"
                                placeholder="Last Name"
                                variant="outlined"
                                value={this.state.lastName}
                                onChange={this.handlelastName}
                            /></div>
                        <div className="regEmail">
                            <TextField
                                required
                                fullWidth
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.handleemail}
                            /></div>
                        <div className="regPassword">
                            <TextField
                                required
                                type="password"
                                id="password"
                                placeholder=" * * * * * * * * * * * * * * * "
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.handlePassword}
                            /></div>
                        <div className="regButton">
                            <Button size="small" variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                        </div>
                        <div className="regLink"> <a href="/">Login </a>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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