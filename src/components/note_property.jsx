/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { IconButton } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Archive from './archive';
import Reminder from './reminder';
import Note_toolbar_menu from './note_toolbar_menu';
import Color from './color';
import Collaborator from './add_collaborator';



class Note_property extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="noteCard">

                    <CardActions className="notesProperties">
                        <IconButton size="small"><Reminder /></IconButton>
                        <IconButton size="small"><Collaborator /></IconButton>
                        <IconButton size="small"><Color id={this.props.id}/></IconButton>
                        <IconButton size="small"><Archive /></IconButton>
                        <IconButton size="small"><Note_toolbar_menu id={this.props.id}/></IconButton>
                    </CardActions>
 
            </div>
        )
    }
}
export default withRouter(Note_property);