import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import React from 'react'
import { withRouter } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isArchive: false
        }
    }

    handleColor = async () => {
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
                <Tooltip title="AddColor">
                    <ColorLensOutlinedIcon onClick={this.handleColor} />
                </Tooltip >
            </div>
        )
    }
}
export default withRouter(Color)