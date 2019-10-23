import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'
import { resetPassword } from '../services/userservice';
export default class Resetpassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            snackBarMsg: '',
            openSnackBar: false,
        }
        // this.handleemail=this.handleemail.bind(this)
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = () => {

        if (this.state.password === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "pasword cannot be empty"
            })
        }

        else {
            let data = {
                "password": this.state.password
            }
            console.log("Reset Password Component data", data)
            resetPassword(data).then(res => {
                console.log("Response after hitting reset password api >> ", data);
                this.props.history.push('/')

            }).catch(error => {
                console.log("Error after hitting reset password api  ", error);
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
            <div className="resetPassword-container">
                <Card className="resetPassword-card">
                    <div>
                        <h1>
                            Reset Password
                    </h1>
                        <TextField
                            id="password"
                            placeholder="Password"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.handlePassword}
                        />
                        <Button onClick={this.handleSubmit}>Submit</Button>
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