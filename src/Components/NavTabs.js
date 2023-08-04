import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from '../downloads/mvaughn_resume.pdf';
import { deepPurple } from '@mui/material/colors';
import './css/NavBar.css';

function NavTabs({ currentPage, handlePageChange }) {

    const [scrolled, setScrolled] = useState(false);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const toggleNavbar = () => {
        setToggled(!toggled);
    };

    return (
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" className={`${scrolled ? "scrolled" : ""} ${toggled ? "toggled" : ""}`}>
                    <Container className="mt-3 pb-3">
                        <Navbar.Brand className="brand">Melissa Vaughn</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#about"
                                    onClick={() => handlePageChange('About')}
                                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
                                <Nav.Link href="#projects"
                                    onClick={() => handlePageChange('Projects')}
                                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</Nav.Link>
                                <Nav.Link href="#contact"
                                    onClick={() => handlePageChange('Contact')}
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
                            </Nav>
                            <span className="nav-text" >
                                <div className="social-icon">
                                    <a href="https://github.com/Meljska-Fawn">
                                        <GitHubIcon fontSize="large" sx={{ color: deepPurple[500] }}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/melissa-vaughn-663b35226/">
                                        <LinkedInIcon fontSize="large" sx={{ color: deepPurple[500] }}/>
                                    </a>
                                </div>
                                <a href={resume} target="_blank" rel="noreferrer"><button className='nav-button'>Download CV</button></a>
                            </span>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default NavTabs;