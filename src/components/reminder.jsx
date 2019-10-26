import React from 'react'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import { withRouter } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

 class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReminder: false
        }
    }

    handleReminder = async() => {
        this.setState({
            isReminder: true
        })
        const userNoteId = this.props.reminderNoteId;
        var data = {
            noteId: [userNoteId],
            isReminder: true
        }
        
   
    }
    render() {
        return (
            <div>
                <Tooltip title="Reminder">
                    <AddAlertOutlinedIcon onClick={this.handleReminder}
                    />
                </Tooltip >
            </div>
        )
    }
}
export default withRouter(Reminder)