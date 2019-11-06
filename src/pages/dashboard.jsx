import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import ClearIcon from '@material-ui/icons/Clear';

import { makeStyles } from '@material-ui/core/styles';
import LoopIcon from '@material-ui/icons/Loop';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';

import { Grid } from '@material-ui/core';
import Side_navigation_bar from '../components/side_navigation_bar'
import Display_notes from '../components/display_notes';
import Create_note from '../components/create_note';



// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//   }));


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            view: true
        }
    }
    toggleDrawer = async () => {
        await this.setState({
            isOpen: !this.state.isOpen

        });
        console.log(this.state.isOpen);
    };

    // Dashboard.propTypes = {
    //     handleList: PropTypes.func,
    //     handleGrid: PropTypes.func,
    // };

    handleView=()=>{
        this.setState({
            view:!this.state.view
        })
    }

    render() {

        return (
            <div>

                <AppBar position="static" >
                    <Toolbar style={{ backgroundColor: "white" }} >
                        <div>
                            <IconButton edge="start" aria-label="menu" onClick={this.toggleDrawer}>
                                <MenuIcon />
                            </IconButton>
                            <Side_navigation_bar menuSelect={this.state.isOpen} />
                        </div>
                        <div>
                            <img className="keep-img" alt='not found' src={require('../assets/images/google_keep.png')} />
                        </div>
                        <Typography variant="h6" noWrap>
                            <span style={{ color: '#808080' }}>Fundo</span> Fundo
              </Typography>
                        <div className="search" >
                            <div >
                                <SearchIcon />
                            </div>
                            <InputBase className="searchbar"
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton >
                                <ClearIcon />
                            </IconButton>
                        </div>

                        <div />
                        <div style={{ display: 'flex', color: '#808080' }} className="icons-div">
                            <IconButton color="inherit">
                                <LoopIcon onClick={() => window.location.reload(false)}></LoopIcon>
                            </IconButton>
                            <IconButton color="inherit" onClick={this.handleView}>
                            {this.state.view?<ViewAgendaIcon />:<AppsIcon />}
                            </IconButton>

                        </div>
                        <div style={{ display: 'flex', color: '#808080' }} className="profile-div">
                            <Grid >
                                <img alt='not found' style={{ width: '35px', height: '35px', borderRadius: '50%' }} src={require('../assets/images/profile.JPG')}
                                />
                            </Grid>
                        </div>
                    </Toolbar>
                </AppBar>
                <div>
                    <Create_note />
                </div>
                <div>
                    <Display_notes viewProps={this.state.view}/>
                </div>
            </div>
        );
    }
}
