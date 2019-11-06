import React, { Component } from 'react'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import { withRouter } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { archive } from '../services/noteservice'
class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isArchived: false
        }
    }
    handleArchive = async() => {
        this.setState({
            isArchived: true
        })
        const noteId = this.props.archiveNoteId;
        var data = {
            noteIdList: [noteId],
            isArchived: true
        }
     await archive(data).then((res) => {
            console.log('res in archive component', res);
            this.props.archivePropsToGetNotes(true)

        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <Tooltip title="Archive">
                    <ArchiveOutlinedIcon onClick={this.handleArchive}
                    />
                </Tooltip >
            </div>
        )
    }
}
export default withRouter(Archive)





// import React, { Component } from 'react'
// import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
// import { withRouter } from 'react-router-dom';
// import { Tooltip } from '@material-ui/core';

// class Archive extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isArchive: false
//         }
//     }

//     handleArchive = async () => {
//         this.setState({
//             isArchive: true
//         })
//         const userNoteId = this.props.archiveNoteId;
//         var data = {
//             noteId: [userNoteId],
//             isArchive: true
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Tooltip title="Archive">
//                     <ArchiveOutlinedIcon onClick={this.handleArchive} />
//                 </Tooltip >
//             </div>
//         )
//     }
// }
// export default withRouter(Archive)