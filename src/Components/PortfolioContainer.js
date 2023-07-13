import React, { useState } from 'react';
import Footer from "./Footer";
import NavTabs from './NavTabs';
import Skills from './pages/Skills';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Container from 'react-bootstrap/Container';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Skills') {
            return <Skills />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <Container>
            <NavTabs className="mb-5" currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </Container>
    );
}