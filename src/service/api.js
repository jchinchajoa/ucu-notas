import axios from 'axios';

const url = "http://127.0.0.1:3003/students";

export const getallUsers = async () => {
    return await axios.get(url);
}

export const addStudentNote = async (id, note) => {
    return await axios.post(`${url}/${id}`,{note});
}

export const deleteStudentNote = async (id, note) => {
    return await axios.delete(`${url}/${id}`, {data: {note}});
}