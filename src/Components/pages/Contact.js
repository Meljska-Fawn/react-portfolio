import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { validateEmail } from '../../utils/helpers';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
// import SatelliteIcon from '@mui/icons-material/Satellite'; 
// import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
// import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import Lottie from 'react-lottie';
import animationData from '../../images/animation_lk1q6wwx.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

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
        <>

            <div className="fixed w-full h-full top-0 left-0 z-[-1]" style={{ opacity: '0.4' }}>
                <Lottie options={defaultOptions} />
            </div>

            <div className="my-24">
                <div className="grid grid-cols-8 lg:gap-4 gap-1 items-center justify-center h-screen">
                    <div className="lg:col-start-2 lg:col-end-5 md:col-start-2 md:col-end-8 place-self-center col-start-2 col-end-8 my-5 md:mt-2">
                        <div className="mb-5">
                            <div className="contact-titles">I'm currently coding & playing in</div>
                            <div className="contact-subtitles">White Salmon, WA</div>
                        </div>

                        <div className="mb-5">
                            <div className="contact-titles">Give me a ring</div>
                            <div className="contact-subtitles">+1 540.819.4352</div>
                        </div>

                        <div className="mb-5">
                            <div className="contact-titles">Shoot me an email</div>
                            <div className="contact-subtitles">Meli.explores@gmail.com</div>
                        </div>

                    </div>

                    <div className="contactBox my-4 lg:col-start-5 lg:col-end-8 md:col-start-2 md:col-end-8 col-start-1 col-end-9">
                        <Paper elevation={3} className="mb-10">
                            <div className="p-3 font-bold text-center text-slate-700 leading-snug md:text-5xl text-4xl">
                                Let's Connect!
                            </div>
                            <form className="form">
                                <div className="px-4">
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
                                <div className="p-4">
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
                                <div className="px-4">
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
                                <div className="p-4">
                                    <Button className="contact" onClick={handleFormSubmit} type="button" variant="contained" endIcon={<SendIcon />}>Send</Button>
                                </div>
                            </form>
                        </Paper>
                        {errorMessage && (
                            <div className="my-2 text-base sm:text-xl text-slate-700">
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}