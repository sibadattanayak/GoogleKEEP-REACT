import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { withRouter } from 'react-router-dom';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { MenuItem, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                top: "69px"
            },
            paperAnchorLeft: {
                width: "230px"
            }
        },
        MuiButtonBase: {
            root: {
                borderRadius: "0px 30px 30px 0px"
            }
        }
    }
})

class Side_navigation_bar extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            open2: false,
            open3: false,
            color: null,
            appTitle: '',
            allLabels: [],
            pointer: 'Notes',
        }
    }

    handleColor = () => {
        this.setState({
            pointer: 'Notes',
        })
        this.props.history.push('/dashboard');
    }

    handleColor1 = async () => {
        this.setState({
            pointer: 'Reminder',
            appTitle: "Reminder"
        })
        this.props.history.push('/reminder', this.state.appTitle);
    }
    handleColor2 = () => {
        this.setState({
            pointer: 'EditLabel',
            color: "#FEEFC3"
        })
    }
    handleColor3 = async () => {
        this.setState({
            appTitle: "Archive"
        })
        this.props.history.push('/archive', this.state.appTitle);
        console.log('title =>> ', this.state.appTitle);

    }
    handleColor4 = async () => {
        this.setState({
            appTitle: "Trash"
        })
        this.props.history.push('/trash', this.state.appTitle);
    }

   
    render() {
        var temp1 = this.state.open ? this.state.color : null
        var temp2 = this.state.open1 ? this.state.color : null
        var temp3 = this.state.open2 ? this.state.color : null
        var temp4 = this.state.open3 ? this.state.color : null
        var temp5 = this.state.open4 ? this.state.color : null
        const labelMap = this.state.allLabels.map((key) => {

            return (
                <div className="drawer-label" >
                    <LabelOutlinedIcon style={{ paddingRight: "30px" }} />
                    {key.label}

                </div>
            )
        })
        return (
            
            <div className="drawer-container" >
                <MuiThemeProvider theme={theme} >
                    <div className="drawer-div1" style={{ borderRadius: "0px 50px 50px 0px" }}>
                        <Drawer className="drawer" variant="persistent" overflow="auto" open={this.props.menuOpen}  >
                            <MenuItem id="notes" className="drawer-data" onClick={this.handleColor} >
                                <EmojiObjectsOutlinedIcon />
                                <span className="drawer-names">Notes</span>
                            </MenuItem>
                            <MenuItem id="notification" className="drawer-data" onClick={this.handleColor1} >

                                <span className="drawer-names">Reminders</span>
                            </MenuItem>
                            <Divider />
                            <div style={{ overflowY: "auto", height: "53%" }} >
                                <h6 style={{ paddingLeft: "20px" }}>Lables</h6>
                                <div className="drawer-labels">{labelMap}</div>
                                <span id="editlabel" className="drawer-data" onClick={this.handleColor2} style={{ backgroundColor: temp3 }}>
                                </span>
                                <Divider />
                            </div>
                            <MenuItem id="archive" className="drawer-data" onClick={this.handleColor3} style={{ backgroundColor: temp4 }}>
                                <ArchiveOutlinedIcon />
                                <span className="drawer-names">Archive</span>
                            </MenuItem>
                            <MenuItem id="bin" onClick={this.handleColor4} style={{ backgroundColor: temp5 }}>
                                <DeleteTwoToneIcon />
                                <span className="drawer-names">Bin</span>
                            </MenuItem>
                            <Divider />
                        </Drawer>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default withRouter(Side_navigation_bar);
