import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import Archive from './archive';
import Reminder from './reminder';
import Note_toolbar_menu from './note_toolbar_menu';
import Color from './color';
import Collaborator from './add_collaborator';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class Note_card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="noteCard-component">
                <Card className="noteCard">
                   <div>
                    <CardContent>
                        <div>
                        <Typography color="textSecondary" gutterBottom>
                           <h2> This is Note Title area </h2>
                        </Typography>
                        </div>
                        <div>
                        <Typography variant="body2" component="p">
                            This is Note Description area
                        </Typography>
                        </div>
                    </CardContent>
                    </div><br />
                    <div className="notesProperties"> 
                        <CardActions >
                            <IconButton size="small"><Reminder /></IconButton>
                            <IconButton size="small"><Collaborator /></IconButton>
                            <IconButton size="small"><Color /></IconButton>
                            <IconButton size="small"><Archive /></IconButton>
                            <IconButton size="small"><Note_toolbar_menu /></IconButton>
                        </CardActions>
                    </div>
                </Card>
            </div>
        )
    }
}
export default withRouter(Note_card);