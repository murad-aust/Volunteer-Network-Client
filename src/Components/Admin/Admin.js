import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import trash from '../../logos/trash-2 9.png';
import user from '../../logos/users-alt 1.png'
import plus from '../../logos/plus 1.png'
import { Link } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#F5F6FA',
        color: theme.palette.common.black,

    },
    body: {
        fontSize: 14,
        outline: 'none',

    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
        borderRadius: '40px',
        backgroundColor: 'white',
    },

});

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'white',
        },
    },
}))(TableRow);

const Admin = () => {
    const [volunteer, setVolunteer] = useState([]);
    const [remove, setRemove] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        fetch('http://localhost:5000/admin/activities')
            .then(res => res.json())
            .then(data => setVolunteer(data))

    }, [remove])

    const handleVolunteerRemove = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setRemove(!remove)

                }

            })

    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }} >
            <Container className="d-flex" >
                <div>
                    <Navbar >
                        <Navbar.Brand >
                            <img
                                src={logo}
                                width="120"
                                height="60"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"

                            />
                        </Navbar.Brand  >
                    </Navbar>

                    <div>
                        <Link to="/admin">
                            <Button variant="light" style={{ width: '210px' }}> <img style={{ width: '15px', height: '15px' }} src={user} alt="" /> Volunteer Register List</Button>
                        </Link>
                        <br />
                        <Link to="/addEvent">
                            <Button variant="light" style={{ width: '210px', marginTop: '10px' }}><img style={{ width: '15px', height: '15px' }} src={plus} alt="" />  Add Event</Button>
                        </Link>
                    </div>
                </div>


                <div style={{ margin: '30px', width: '100%', backgroundColor: 'white' }}>
                    <h3 style={{ margin: '20px' }} >Register Volunteer List</h3>
                    <div style={{ margin: '20px', }}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead style={{ backgroundColor: 'primary' }}>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell>Email</StyledTableCell>
                                        <StyledTableCell>Date</StyledTableCell>
                                        <StyledTableCell>Event</StyledTableCell>
                                        <StyledTableCell>Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {volunteer.map((volunteer) => (
                                        <StyledTableRow key={volunteer._id}>
                                            <StyledTableCell component="th" scope="row">
                                                {volunteer.name}
                                            </StyledTableCell>
                                            <StyledTableCell>{volunteer.email}</StyledTableCell>
                                            <StyledTableCell>{volunteer.date}</StyledTableCell>
                                            <StyledTableCell>{volunteer.event}</StyledTableCell>
                                            <StyledTableCell>
                                                <button onClick={() => handleVolunteerRemove(volunteer._id)} style={{ backgroundColor: '#FF444A', width: '45px', border: 'none', borderRadius: '5px' }}>
                                                    <img style={{ width: '21px', height: '25px' }} src={trash} alt="" /> </button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </div>

            </Container>


        </div>
    );
};

export default Admin;