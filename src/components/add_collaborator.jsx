import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import React from 'react'
import { withRouter } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

class Add_collaborator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isArchive: false
        }
    }

    handleAddCollaborator = async () => {
        this.setState({
            isArchive: true
        })
        const userNoteId = this.props.archiveNoteId;
        var data = {
            noteId: [userNoteId],
            isArchive: true
        }
    }

    render() {
        return (
            <div>
                <Tooltip title="AddCollaborator">
                    <PersonAddOutlinedIcon onClick={this.handleAddCollaborator} />
                </Tooltip >
            </div>
        )
    }
}
export default withRouter(Add_collaborator)