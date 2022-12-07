import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addStudentNote } from '../service/api';
import { useHistory } from 'react-router-dom';

const AddNote = ({student, close}) => {

    const [note, setNote] = useState('');

    const history = useHistory();

    const onValueChange = (e) =>
    {
        setNote(e.target.value);
    }

    const addNote = async () =>{
       await addStudentNote(student.id, note);
       history.push('/');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h4" align="center">{student.name}</Typography>
                <Typography variant="h6" align="center">{student.email}</Typography>
                <FormGroup>
                <FormControl>
                    <InputLabel>Nota</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="note" value={note} />
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addNote() } color="primary" align="center">Añadir nota</Button>
                    <Button onClick={close} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancelar</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddNote;