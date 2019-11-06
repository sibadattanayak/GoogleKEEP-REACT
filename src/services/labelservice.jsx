import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL


export  function getLables(token) {
    console.log('user123' ,localStorage.getItem('token'));
    return axios.get(baseURL+'/showalllabels',{headers: {'token' :  token}}
    )
}