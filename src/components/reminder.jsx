import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Tooltip, Button,createMuiTheme } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';

import Paper from '@material-ui/core/Paper';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import { ThemeProvider } from "@material-ui/styles";
import {addReminder} from '../services/noteservice'

import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
const theme = createMuiTheme({
    overrides: {
        MuiPickersModal: {
            dialogRootWider: {
                minWidth: "360px",
                minHeight:"10px"
            }
        },MuiPickersToolbar:{
            toolbar :{
            backgroundColor:"yellowgreen"
            }
        },MuiPickersDay:{
            isSelected: {
            backgroundColor:"yellowgreen"
            }
        },MuiPickerDTTabs:{
            tabs:{
            backgroundColor:"yellowgreen"
            }
        },MuiPickersClockPointer:{
            pointer:{
            backgroundColor:"yellowgreen"
            },thumb:{
                border:"14px solid yellowgreen"
               } 
        },MuiPickersClock:{
            pin:{
            backgroundColor:"yellowgreen"
            }
        }
    }
})

export default class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId:props.id,
            openPop: false,
            anchorEl: false,
            selectedDate: new Date(),
            // '2014-08-18T21:11:54'
        }
    }
    handleChangeDate =async date => {
       await this.setState({
            selectedDate: date
        })
        // console.log("reminder date value in rem compnent",this.state.selectedDate);
        
        //this.props.propsToCreateNote(this.state.selectedDate)
    }
    handleOpen = () => {
        this.setState({
            openPop: !this.state.openPop
        })
    }
    handleOpenPopper(e) {
        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target
        })
    }

    handleReminderButton = async() => {
        // console.log("reminder-notesId----", this.props.notesId);
       
        let data = {
           // "noteIdList": [this.props.notesId],
            "reminder":this.state.selectedDate
        }
        console.log("data in reminderCompo is ",data);  
        console.log('noteList : ',this.state.noteId);
        
      addReminder(this.state.noteId,data).then((res) => {
            // console.log("response---- in reminder", res);
       this.props.reminderPropsToGetNotes(true)
            this.props.reminderPropsToGetReminder(true)
           
            // this.props.propsToCreateNote(this.state.selectedDate)
        }).catch((err) => {
            console.log('err in  remindercomp', err);
        })
     }
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Tooltip title="Remind me">
                        <AddAlertOutlinedIcon onClick={(e) => this.handleOpenPopper(e)} />
                    </Tooltip>
                    <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} >
                        <Paper className="reminder-paper">
                            {/* Reminder:
                        <MenuItem>
                                Later today
                        </MenuItem>
                            <MenuItem>
                                Tomorrow
                        </MenuItem>
                            <MenuItem>
                                Next Week
                        </MenuItem> */}
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DateTimePicker value={this.state.selectedDate} onChange={this.handleChangeDate} />
                            </MuiPickersUtilsProvider>
                            <div>
                                <Button onClick={this.handleReminderButton}>Set Reminder</Button>
                            </div>
                        </Paper>
                    </Popper>
                </ThemeProvider>
            </div>
        )
    }
}
// export default withRouter(Remainder)




// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { Tooltip, Button, createMuiTheme } from '@material-ui/core';
// import { DateTimePicker } from 'material-ui-pickers';

// import Popper from '@material-ui/core/Popper';

// import 'date-fns';

// import DateFnsUtils from "@date-io/date-fns";
// import Paper from '@material-ui/core/Paper';
// import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
// import {  MuiPickersUtilsProvider } from "material-ui-pickers";

// import { ThemeProvider } from "@material-ui/styles";
// import { addReminder } from '../services/noteservice';
// import MenuItem from '@material-ui/core/MenuItem';

// const theme = createMuiTheme({
//     overrides: {
//         MuiPickersModal: {
//             dialogRootWider: {
//                 minWidth: "360px",
//                 minHeight: "10px"
//             }
//         }, MuiPickersToolbar: {
//             toolbar: {
//                 backgroundColor: "yellowgreen"
//             }
//         }, MuiPickersDay: {
//             isSelected: {
//                 backgroundColor: "yellowgreen"
//             }
//         }, MuiPickerDTTabs: {
//             tabs: {
//                 backgroundColor: "yellowgreen"
//             }
//         }, MuiPickersClockPointer: {
//             pointer: {
//                 backgroundColor: "yellowgreen"
//             }, thumb: {
//                 border: "14px solid yellowgreen"
//             }
//         }, MuiPickersClock: {
//             pin: {
//                 backgroundColor: "yellowgreen"
//             }
//         }
//     }
// })

// class Reminder extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             openPop: false,
//             anchorEl: false,
//             selectedDate: new Date(),
//             // '2014-08-18T21:11:54'
//         }
//     }

//     handleChangeDate = async date => {
//         await this.setState({
//             selectedDate: date
//         })
//         // console.log("reminder date value in rem compnent",this.state.selectedDate);

//        // this.props.propsToCreateNote(this.state.selectedDate)
//     }

//     handleOpen = () => {
//         this.setState({
//             openPop: !this.state.openPop
//         })
//     }

//     handleOpenPopper(e) {
//         this.setState({
//             anchorEl: this.state.anchorEl ? false : e.target
//         })
//     }

//     handleReminderButton = async () => {
//         // console.log("reminder-notesId----", this.props.notesId);

//         let data = {
//             "id": [this.props.notesId],
//             "reminder": this.state.selectedDate
//         }
//         // console.log("data in reminderCompo is ",data);  
//         await addReminder(data).then((res) => {
//             // console.log("response---- in reminder", res);
//             this.props.reminderPropsToGetNotes(true)
//             this.props.reminderPropsToGetReminder(true)

//             // this.props.propsToCreateNote(this.state.selectedDate)
//         }).catch((err) => {
//             console.log('err in  remindercomp', err);
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <ThemeProvider theme={theme}>
//                     <Tooltip title="Remind me">
//                         <AddAlertOutlinedIcon onClick={(e) => this.handleOpenPopper(e)} />
//                     </Tooltip>
//                     <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} >
//                         <Paper className="reminder-paper">
//                             Reminder:
//                         <MenuItem>
//                                 Later today
//                         </MenuItem>
//                             <MenuItem>
//                                 Tomorrow
//                         </MenuItem>
//                             <MenuItem>
//                                 Next Week
//                         </MenuItem>
//                             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                 <DateTimePicker value={this.state.selectedDate} onChange={this.handleChangeDate} />
//                             </MuiPickersUtilsProvider>
//                             <div>
//                                 <Button onClick={this.handleReminderButton}>Set Reminder</Button>
//                             </div>
//                         </Paper>
//                     </Popper>
//                 </ThemeProvider>
//             </div>
//         )
//     }
// }
// export default withRouter(Reminder)

