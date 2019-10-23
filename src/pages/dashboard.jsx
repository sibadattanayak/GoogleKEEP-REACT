import React, { Component } from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snackBarMsg: '',
            openSnackBar: false,
        }
    }
    handleuserEmail = (event) => {
        this.setState({
            userEmail: event.target.value
        })
    }

    render() {
        return (
            <div className="login-container">
                <Card className="login-card">
                    <h1>
                       Dashboard
                </h1>
                    <TextField
                        id="userEmail"
                        placeholder="userEmail"
                        variant="outlined"
                        
                    />
                </Card>
            </div>
        )
    }
}