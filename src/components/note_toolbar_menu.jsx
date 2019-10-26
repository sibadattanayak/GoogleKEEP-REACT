import MenuItem from '@material-ui/core/MenuItem';
import React from 'react'
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
//import Menu from '@material-ui/core/Menu';
import { Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';



class Note_toolbar_menu extends React.Component {

    constructor() {
        super();
        this.state = {
            ITEM_HEIGHT : 48,
            anchorEl:'',
            options : [
                'Delete Note',
                'Add Lebel',
                'Comming Soon',
            ]

        }
    }
    handleClick = event => {
        this.setState({
            anchorEl:event.target
        })
    };

    handleClose = () => {
        this.setState({
            anchorEl:null
        })
    };
    render() {
        return (
            <div>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.anchorEl}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: this.state.ITEM_HEIGHT * 5,
                            width: 150,
                        },
                    }}
                >
                    {this.state.options.map(option => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div >
        );
    }
}
export default withRouter(Note_toolbar_menu);



