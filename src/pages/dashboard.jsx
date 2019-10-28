/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { AppBar, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Note_card from '../components/note_card';
import SideBar from '../components/side_navigation_bar'

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: "#212121",
                backgroundColor: "rgba(255,255,255,1)",
            }
        }
    }
})
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snackBarMsg: '',
            openSnackBar: false,
            menu:false,
        }
    }
    handleMenu=async()=>{
        console.log("Inside handleMenu1=>> ",this.state.menu)
        await this.setState({
            menu:!this.state.menu
        })
        console.log("Inside handleMenu2=>>",this.state.menu)
       // this.props.getMenu(this.state.menu)
    }
    render() {
        return (
            <div className="mainDashboard">
            <MuiThemeProvider theme={theme}>
                <div className="dashboardPage">
                    <AppBar position="static" >
                        <div className="mainDiv">
                            <MenuOutlinedIcon onClick={this.handleMenu}/>
                            <SideBar menuOpen={this.state.menu}></SideBar>
                            Keep
                            <div className="dashboardSearchBar">
                            <SearchIcon />
                            
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            /></div>
                            <RefreshOutlinedIcon />
                            <AppsOutlinedIcon />
                        </div>
                    </AppBar>
                </div>
                <div className="dashboardNoteCard">
                <Note_card />
                </div>
            </MuiThemeProvider>
            </div>


        )
    }
}