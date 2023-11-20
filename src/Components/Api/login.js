import axios from "axios";

const url = "http://localhost:9000"

export const registerApi = async (payload) => {
    console.log("singup", payload)
    return await axios.post(`${url}/signup/verify`, payload)
}

export const loginApi = async (payload) => {
    console.log("login", payload)
    return await axios.post(`${url}/login`, payload)
}

export const forgotPasswordApi = async (payload) => {
    console.log("forgot", payload)
    return await axios.post(`${url}/password/forgotpassword`, payload)
}

export const passwordResetApi = async (payload) => {
    console.log("pass-reset", payload)
    return await axios.post(`${url}/password/reset`, payload)
}