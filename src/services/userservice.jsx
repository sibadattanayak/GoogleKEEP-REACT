import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
console.log("token",baseURL);


export function login(data) {
    console.log(data)
    console.log("token",baseURL);

    return axios.post(baseURL + '/login', data,
        {
            headers: { 'Content-Type': 'application/json' }
        })
}

export function registration(data) {
    console.log(data)
    return axios.post(baseURL + '/registration', data,
        {
            headers: { 'Content-Type': 'application/json' }
        })
}

export function forgotPassword(data) {
    console.log(data)
    return axios.put(baseURL + '/forgotpassword', data,
        {
            headers: { 'Content-Type': 'application/json' }
        })
}
export function resetPassword(data) {
    console.log(data)
    console.log("token",localStorage.getItem("token"))
    return axios.put(baseURL + '/resetpassword', data,
        {
            headers: { 'token': localStorage.getItem('token') }
        })
}
