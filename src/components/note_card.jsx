/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Archive from './archive';
import Reminder from './reminder';
import Note_toolbar_menu from './note_toolbar_menu';
import Color from './color';
import Collaborator from './add_collaborator';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



class Note_card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="noteCard">
                <Card >

                   <div className="noteCardContent">
                   
                    <CardContent>
                        
                        <TextareaAutosize color="textPrimary" aria-label="minimum height" rows={2} />
                       
                        <TextareaAutosize color="textSecondary" aria-label="minimum height" rows={6} />
                        
                    </CardContent>
                    </div>
                     
                    <CardActions className="notesProperties">
                        <IconButton size="small"><Reminder /></IconButton>
                        <IconButton size="small"><Collaborator /></IconButton>
                        <IconButton size="small"><Color /></IconButton>
                        <IconButton size="small"><Archive /></IconButton>
                        <IconButton size="small"><Note_toolbar_menu /></IconButton>
                    </CardActions>
                
                </Card>
            </div>
        )
    }
}
export default withRouter(Note_card);