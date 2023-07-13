import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { validateEmail } from '../../utils/helpers';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SatelliteIcon from '@mui/icons-material/Satellite'; import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';


export default function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'contactName') {
            setContactName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setUserMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the contactName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !contactName) {
            if (!contactName) {
                setErrorMessage('Contact name is required');
            } else {
                setErrorMessage('Email is invalid');
            }
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        // If everything goes according to plan, we want to clear out the input after a successful submit.
        setContactName('');
        setEmail('');
        setUserMessage('');
    };

    return (
        <Container>
            <Row className="fluid mt-5 d-flex align-items-center">
                <Col xs={12} md={6} className="mb-3">
                    <Row>
                        <Col className="col-1"><SatelliteIcon fontSize="large" /></Col>
                        <Col className="col-11">
                            <h4>Location</h4>
                            <p>White Salmon, Washington</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex align-items-right col-1"><ForwardToInboxIcon /></Col>
                        <Col className="col-11">
                            <h4>Email</h4>
                            <p>Meli.explores@gmail.com</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex align-items-right col-1"><PhonelinkRingIcon /></Col>
                        <Col className="col-11">
                            <h4>Phone</h4>
                            <p>+1540.819.4352</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 500,
                                height: 450,
                            },
                        }}
                    >
                        <Paper elevation={3}>
                            <div className="p-3">
                                <h2>Let's Connect</h2>
                            </div>
                            <form className="form">
                                <div className="px-3">
                                    <TextField
                                        fullWidth label="Full Name"
                                        id="fullWidth"
                                        defaultValue="Normal"
                                        variant="standard"
                                        value={contactName}
                                        name="contactName"
                                        onChange={handleInputChange}
                                        type="text"
                                    />
                                </div>
                                <div className="p-3">
                                    <TextField
                                        fullWidth label="Email"
                                        id="fullWidth"
                                        defaultValue="Normal"
                                        variant="standard"
                                        value={email}
                                        name="email"
                                        onChange={handleInputChange}
                                        type="email"
                                    />
                                </div>
                                <div className="px-3">
                                    <TextField
                                        id="standard-multiline-static"
                                        fullWidth label="Type your message here"
                                        multiline
                                        rows={6}
                                        defaultValue="Default Value"
                                        variant="standard"
                                        value={userMessage}
                                        name="userMessage"
                                        onChange={handleInputChange}
                                        type="text"
                                    />
                                </div>
                                <div className="p-3">
                                    <Button onClick={handleFormSubmit} type="button" variant="contained" endIcon={<SendIcon />}>Send</Button>
                                </div>
                            </form>
                        </Paper>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </Box>
                </Col>
            </Row>
        </Container >
    );
}