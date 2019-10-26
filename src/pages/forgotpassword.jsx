import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'
import { forgotPassword } from '../services/userservice';

export default class Forgotpassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            snackBarMsg: '',
            openSnackBar: false,
        }
        // this.handleemail=this.handleemail.bind(this)
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = () => {

        if (this.state.email === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "email cannot be empty"
            })
        }

        else {
          
            let data = {
                "email": this.state.email,
            }
            console.log("forgot password Component data", data)
            
            forgotPassword(data).then(res => {
                console.log("Response after hitting forgot password api >> ", data);
            }).catch(error => {
                console.log("Error after hitting forgot password api  ", error);
            })
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Check your mail for Reset Password"
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
            <div className="forgotPassword-container">
                <Card className="forgotPassword-card">
                    <div>
                        <h1>
                            Forgot Password
                    </h1>
                        <TextField
                            id="email"
                            placeholder="Email"
                            variant="outlined"
                            value={this.state.email}
                            onChange={this.handleEmail}
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