import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button, Modal, Box, Typography } from '@material-ui/core';
import { getallUsers } from '../service/api';
import AddNote from "./AddNote";
import studentsMock from '../Database/db.json';
import Notes from "./Notes";

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Students = () => {

    const classes = useStyle();

    const [students, setStudents] = useState(studentsMock);
    const [selectedStudent, setSelectedStudent] = useState({});
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openList, setOpenList] = React.useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        setStudents(response.data);
    }

    const handleOpenAdd = (student) => {
        setSelectedStudent(student);
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleOpenList = (student) => {
        setSelectedStudent(student);
        setOpenList(true);
    };

    const handleCloseList = () => {
        setOpenList(false);
    };

    return (
        <>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>Promedio</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        students.map((data) => (
                            <TableRow className={classes.trow}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.average}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{margin: '0px 20px'}} onClick={() => handleOpenAdd(data)}>Añadir nota</Button>
                                    <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => handleOpenList(data)}>Ver notas</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <Modal open={openAdd} onClose={handleCloseAdd}>
                <Box sx={style}>
                    <AddNote student={selectedStudent} close={handleCloseAdd} />
                </Box>
            </Modal>
            <Modal open={openList} onClose={handleCloseList}>
                <Box sx={style}>
                    <Notes student={selectedStudent} close={handleCloseList}/>
                </Box>
            </Modal>
        </>
    )
}

export default Students;
