import axios from "axios";
import * as url from "url";

export const addEmployee = async (obj) => {
    let response = await axios.post('http://localhost:8080/employeepayrollservice/create',obj)
    return response
}

export const getEmployee = async () => {
    let response = axios.get('http://localhost:8080/employeepayrollservice/get')
    return response
}