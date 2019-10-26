import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

class Trash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrash: false,
            anchorEl: false,
        }
    }
    handleButton = () => {
        var trashNoteId = this.props.trashNoteId;
        var data = {
            noteIdList: [trashNoteId],
            isTrash: true
        }
        console.log('Inside trash=>> ', trashNoteId);
        
    }
    render() {
        return (
            <div className="trash-del" onClick={this.handleButton}>
                <DeleteOutlineOutlinedIcon />
                Delete
            </div>
        )
    }
}
export default withRouter(Trash)