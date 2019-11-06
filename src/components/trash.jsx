import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { trash } from '../services/noteservice';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

class Trash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false,
            anchorEl: false,
        }
    }

    handleButton = () => {
        var trashNoteId = this.props.trashNoteId;
        var data = {
            noteIdList: [trashNoteId],
            isDeleted: true
        }
        console.log('data in trashcomp', trashNoteId);
        trash(data)
            .then((res) => {
                console.log('res in trash after hitting', res);
                this.props.trashToMore(true)
            }).catch((err) => {
                console.log('error in trash ', err);
            })
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