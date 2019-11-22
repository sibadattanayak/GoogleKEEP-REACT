import React, { Component } from 'react'
import { Tooltip, IconButton, Popper,Paper,ClickAwayListener } from '@material-ui/core'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import {changeColor} from '../services/noteservice';
const colorPalette = [{ name: "default", colorCode: "#FDFEFE" },
{ name: "Red", colorCode: "#ef9a9a" },
{ name: "Cyan", colorCode: "#80deea" },
{ name: "Blue", colorCode: "#2196f3" },
{ name: "Indigo", colorCode: "#9fa8da" },
{ name: "LightBlue", colorCode: "#90caf9" },
{ name: "Purple", colorCode: "#b39ddb" },
{ name: "Yellow", colorCode: "#c5e1a5" },
{ name: "Lime", colorCode: "#e6ee9c" },
{ name: "Pink", colorCode: "#f48fb1" },
{ name: "gray", colorCode: "#eeeeee" },
{ name: "Brown", colorCode: "#bcaaa4" },
]

export default class Color extends Component {
    constructor(props) {
        super(props);
        console.log('inside color :');
        console.log(props.id);
        this.state = {
            anchorEl:false,
            noteId:props.id,
            colorname:'',
        }
    }
    handleClickAway=()=>{
        this.setState({
            anchorEl:false
        })
    }


    handleChangeColor = (color) => {
        
        console.log('inside close method of proprties: ',color.target.value);
        console.log(this.state.noteId);
        changeColor(color.target.value,localStorage.getItem('token'),this.state.noteId).then(res=>{
            console.log("Response after hitting login api is ",res);
        }).catch(err=>{
            console.log("Error after hitting login api  ",err);
        })
        this.setState({
            anchorEl:null
        })
    }
    handleClick(event) {
                this.setState({
        anchorEl: this.state.anchorEl ? false : event.target
        });
        };
    render() {
        const colorChange = colorPalette.map((key) => {
            return (
                <div className="color-map">
                    <Tooltip title={key.name}>
                        <IconButton style={{ backgroundColor: key.colorCode, border: "silver 2px solid" }}
                            value={key.name}
                            onClick={this.handleChangeColor}>
                        </IconButton>
                    </Tooltip>
                </div>
            )
        })
        return (
            
            <div className="colorpalette-div">
            <Tooltip title="change color">
                <ColorLensOutlinedIcon onClick={(event) => this.handleClick(event)} cursor="pointer" />
            </Tooltip>
            <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl}
                style={{
                    zIndex: "9999"
                }}
            >
                <Paper className="color-styles">
                    {colorChange}
                </Paper>
            </Popper>
            </div>
        )
    }
}
















// import React, { Component } from 'react'
// import { Tooltip, IconButton, Popper, Paper, ClickAwayListener } from '@material-ui/core'
// import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';


// const colorPalette = [{ name: "default", colorCode: "#FDFEFE" },
// { name: "Red", colorCode: "#ef9a9a" },
// { name: "Cyan", colorCode: "#80deea" },
// { name: "Blue", colorCode: "#2196f3" },
// { name: "Indigo", colorCode: "#9fa8da" },
// { name: "LightBlue", colorCode: "#90caf9" },
// { name: "Purple", colorCode: "#b39ddb" },
// { name: "Yellow", colorCode: "#c5e1a5" },
// { name: "Lime", colorCode: "#e6ee9c" },
// { name: "Pink", colorCode: "#f48fb1" },
// { name: "gray", colorCode: "#eeeeee" },
// { name: "Brown", colorCode: "#bcaaa4" }
// ]

// export default class Color extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { id:props.id,
//             anchorEl:false, 
//             colorname:'',       }
//     }

//     handleClickAway = () => {
//         this.setState({
//             anchorEl: false
//         })
//     }

//     handleChangeColor = (e) => {
//         changeColor(color.target.value,localStorage.getItem('token'),this.state.id).then(res=>{
//             console.log("Response after hitting login api is ",res);    
//         }).catch(err=>{
//             console.log("Error after hitting login api  ",err);
//         })
//         this.setState({
//             anchorEl:null
//         })
//     }

//     handleClick(event) {
//         this.setState({
//             anchorEl: this.state.anchorEl ? false : event.target
//         });
//     };
//     render() {
//         const colorChange = colorPalette.map((key) => {
//             return (
//                 <div className="color-map">
//                     <Tooltip title={key.name}>
//                         <IconButton style={{ backgroundColor: key.colorCode, border: "silver 1px solid" }}
//                             value={key.colorCode}
//                             onClick={this.handleChangeColor}>
//                         </IconButton>
//                     </Tooltip>
//                 </div>
//             )
//         })
//         return (
//             <div className="colorpalette-div">
//                 <Tooltip title="change color">
//                     <ColorLensOutlinedIcon onClick={(event) => this.handleClick(event)} cursor="pointer" />
//                 </Tooltip>
//                 <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl}
//                     style={{
//                         zIndex: "9999"
//                     }}
//                 >
//                     <Paper className="color-styles">
//                         {colorChange}
//                     </Paper>
//                 </Popper>
//             </div>
//         )
//     }
// }


