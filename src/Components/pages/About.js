import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePhoto from '../../assets/profile-photo_bw.jpeg';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import KayakingIcon from '@mui/icons-material/Kayaking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import PhishingIcon from '@mui/icons-material/Phishing';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export default function About() {
    return (
        <Container className="fluid mt-5 pt-4" style={{ maxWidth: '1000px' }}>
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="display-1 text-uppercase fw-bold">HI THERE<br />
                        IT'S<br />
                        MELISSA</h1>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={profilePhoto} className="img-fluid rounded-pill" style={{ border: '2px solid black', maxHeight: '400px' }}></Image>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <h5 className="lh-base mt-5">I'm a Full-Stack Web Developer with a Graphic Design and Biology background. I've spent the previous 2.5 years collecting data for NOAA as a fisheries biologist working on commercial fishing vessels. Now I'm integrating my passion for research, methods, models, organization, systems, data collection, and management with skills in design thinking and quality craftsmanship to create solutions for a better web presence and information display providing a rich human experience.</h5>
                </Col>
                <Col xs={12} md={6}>
                    <h3 className="fw-bold mt-5">When I'm not developing, I'm also passionate about</h3>
                    <Row className="mt-3">
                        <Col xs={12} md={6}>
                            <p><KayakingIcon /> Whitewater Kayaking</p>
                            <p><DownhillSkiingIcon /> Skiing</p>
                            <p><DirectionsBikeIcon /> Mountain Biking</p>
                            <p><FilterHdrIcon /> Rock Climbing</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars-fill" viewBox="0 0 16 16">
                                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z" />
                            </svg>  Bird Watching</p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                            </svg>  Mushroom Foraging</p>
                            <p><PhishingIcon />Fly Fishing</p>
                            <p><SelfImprovementIcon /> Acro Yoga</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}