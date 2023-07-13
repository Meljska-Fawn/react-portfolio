import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Flip from 'react-reveal/Flip';


export default function Skills() {
    return (
        <Container className="fluid mt-5" style={{ maxWidth: '800px' }}>
            <h1 className="display-1 text-uppercase fw-bold">Skills</h1>
            <Flip left>
                <div className='container-lg'>
                    <Row className="mt-5">
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style={{ maxHeight: '100px' }} alt='html' />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style={{ maxHeight: '100px' }} alt='css' />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={{ maxHeight: '100px' }} alt='javascript' />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style={{ maxHeight: '100px' }} alt='nodeJS' />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style={{ maxHeight: '100px' }} alt='express' />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" style={{ maxHeight: '100px' }} alt='mysql' />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" style={{ maxHeight: '100px' }} alt='npm' />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" style={{ maxHeight: '100px' }} alt='heroku' />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={{ maxHeight: '100px' }} alt='react' />
                        </Col>
                    </Row>
                </div>
            </Flip>
        </Container>
    );
}