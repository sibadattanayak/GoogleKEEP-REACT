import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InputAdornment from '@material-ui/core/InputAdornment';
import BrushIcon from '@material-ui/icons/Brush';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextareaAutosize } from '@material-ui/core';
import Note_property from '../components/note_property'
import { createNotes } from '../services/noteservice';

export default class Create_note extends Component {
    constructor(props) {
        super(props);
        this.state = {
          doescheckfield:false,
          noteTitle:'',
          noteDescription:'',
        }
    }

    handleTitle = (event) => {
        this.setState({
            noteTitle: event.target.value
        })
    }

    handleDescription = (event) => {
        this.setState({
            noteDescription: event.target.value
        })
    }

    handleSubmit = () => {
        if (this.state.noteTitle === '' && this.state.noteDescription ==='') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "cannot be empty"
            })
            
        }
        else{
            let data={
                "noteTitle":this.state.noteTitle,
                "noteDescription": this.state.noteDescription,
            }
            createNotes(localStorage.getItem('token'), data).then(res=>{
                console.log("Response after hitting login api is ",res);
                
            }).catch(err=>{
                console.log("Error after hitting login api  ",err);
            })

    }
    this.setState({
        doescheckfield:!this.state.doescheckfield
       })
}

handlenotes =()=>{
   this.setState({
    doescheckfield:!this.state.doescheckfield
   })
}
    render() {
        if(!this.state.doescheckfield)
        {
        return (
            <div className="createnote" >
             <div ><TextField
              style={{width:'550px',border:'none',outline:'none'}}
              id="outlined-basic"
              margin="normal"
              variant="outlined"
              placeholder="Take a note..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                   <div ><Button ><CheckBoxIcon/></Button></div> 
                   
                  
                  </InputAdornment>
                 )
                }}
               onClick={this.handlenotes}

              />
              </div> 
            </div>
        )
    }
    else{
        return(
            <div className="displaynote" >
            <div>
        
        <Card style={{width:'575px',marginLeft:'30%',height:'130px'}}>
        
          <CardContent >
         <div>
         <input style={{border:'none',outline:'none',width:'550px',height:'28px'}} type="text" value={this.state.noteTitle} onChange={this.handleTitle}  placeholder='Title'/>
         </div>

         <div>
             <TextareaAutosize style={{width:'550px',border:'none',outline:'none',height:'48px'}} value={this.state.noteDescription}  onChange={this.handleDescription} placeholder='Description'/>
         </div>
         <div style={{display:'flex'}}>
         <div className="createnoteProperty">
             <Note_property/>
          </div>
          <div>          
           <Button  onClick={this.handleSubmit}>Close</Button> 
         </div>
         </div>
          </CardContent>
        </Card>
        </div>
           </div>
        )
    }
}
}