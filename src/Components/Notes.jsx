import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TableHead, TableRow, TableCell, TableBody, Table, IconButton, makeStyles, Button
} from '@material-ui/core';
import { deleteStudentNote, getStudentNotes } from "../service/api";
import DeleteIcon from '@mui/icons-material/Delete';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px',
    },
    thead:{
        '& > *':{
            background: '#000000',
            color:'#FFFFFF',
            fontSize: '16px'
        }
    },
    trow:{
        '& > *':{
            fontSize: '16px'
        }
    }
});

const Notes = ({student, close}) => {

    const classes = useStyle();

    const [notes, setNotes] = useState(student.notes || []);

    const deleteNote = async (note) => {
       await deleteStudentNote(student.id, note);
       const newNotes = notes.filter(value => value !== note);
       setNotes(newNotes);
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h4" align="center">{student.name}</Typography>
                <Typography variant="h6" align="center">{student.email}</Typography>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.thead}>
                            <TableCell>Nota</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            notes.length && notes.map((note) => (
                                <TableRow className={classes.trow}>
                                    <TableCell>{note}</TableCell>
                                    <TableCell>
                                        <IconButton aria-label="delete" onClick={() => deleteNote(note)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
            <Box>
                <Button onClick={close} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cerrar</Button>
            </Box>
        </Container>
    )
}


export default Notes;