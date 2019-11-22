import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL


export function getUserEmails(){
    return;
}
export function getAllNotes(){

}
export function searchUserList(){
    
}

export function removeCollabNotes(noteId,email){
    return axios.delete(baseURL+'/removecollaborator?noteId='+noteId+'&email='+email,{headers: {'token' :  localStorage.getItem('token')}})
}

export function getCollaboratedUser(noteId) {
    return axios.get(baseURL+'/showallcolabrators?noteId='+noteId,{headers: {'token' :  localStorage.getItem('token')}});
}

export function addCollaboratorNotes(noteId,email){
   
    return axios.post(baseURL+'/addcollaborator?email='+email+'&noteId='+noteId,null,{headers: {'token' :  localStorage.getItem('token')}});
}


export function changeColor(color, token, id) {
    console.log(color);
    console.log(token,id);
    return axios.put(baseURL + '/changecolor/' + color + '?noteId=' + id, null, { headers: { 'token': token } }
    )
}


export function getNotes(token) {
    console.log(token)
    return axios.get(baseURL + '/showallnotes', {headers: {'token' :  localStorage.getItem('token')}}
    )
}

export function createNotes(data) {

    return axios.post(baseURL + '/createnote', data,{headers: {'token' :  localStorage.getItem('token')}}
    )
}

export function trash(data) {
    console.log(data)

    return axios.put(baseURL + '/trash', data,
        {
            headers: { 'token': localStorage.getItem('token') }
        })
}

export  function trashNotes(noteId) {
  
    console.log(noteId);
    return axios.put(baseURL+'/trash?noteId='+noteId,null,{headers: {'token' :  localStorage.getItem('token')}}
    )
}

export  function addReminder(noteId,date) {
   
    var date = new Date(date.reminder);
    let datetime=date.toISOString();
    
return axios.put(baseURL+'/reminder?noteId='+noteId+'&reminderDate='+datetime,null,{headers: {'token' :  localStorage.getItem('token')}}
    )
}

export function archive(data) {
    console.log(data)

    return axios.post(baseURL + '/archive', data,
        {
            headers: { 'token': localStorage.getItem('token') }

        })
}

export  function deleteNote(noteId) {
return axios.delete(baseURL+'/deletenote/?noteId='+noteId,{headers: {'token' :  localStorage.getItem('token')}}
    )
}
export  function getArchive() {
    return axios.delete(baseURL+'/getarchivednotes',{headers: {'token' :  localStorage.getItem('token')}}
        )
    }