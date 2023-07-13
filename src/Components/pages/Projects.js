import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slide from 'react-reveal/Slide';
import ProjectCard from './ProjectCard';

const styles = {
    card: {
        marginTop: 80,
        maxWidth: 1000,
}
}

export default function Projects() {
    return (
        <Slide left>
            <Container className="fluid" style={styles.card}>
                <Row className="mb-3">
                    <Col xs={12} md={6} className="mb-3">
                        {projects.map ((project) => <ProjectCard project={project}/>)}
                    </Col>
                    <Col xs={12} md={6}>
                        <Card style={{ width: '30rem' }} className="flex flex-wrap -m-4">
                            {secondProjects.map((secondProject) => (
                                <a href={secondProject.deployed} key={secondProject.img} className="">
                                    <Card.Img variant="top"
                                        alt="gallery"
                                        className="img-fluid rounded"
                                        src={secondProject.img}
                                    />
                                    <Card.Body>
                                        <Card.Title className="">
                                            {secondProject.title}<Card.Link href={secondProject.github}>
                                                <GitHubIcon />
                                            </Card.Link>
                                        </Card.Title>
                                    </Card.Body>
                                </a>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Slide>
    );
}

const projects = [
    {
        img: './images/weather-dashboard.gif',
        still: './images/write-this-down.png',
        deployed: 'https://meljska-fawn.github.io/5-day-weather-forecast/',
        title: '5 Day Weather Forecast',
        github: 'https://github.com/Meljska-Fawn/5-day-weather-forecast',
    },
    {
        img: './images/jobstable_course.gif',
        still: './images/write-this-down.png',
        deployed: 'https://jobstacle-course.herokuapp.com/login',
        title: 'Jobstacle Course',
        github: 'https://github.com/Meljska-Fawn/Jobstacle-course',
    },
    {
        img: './images/tech-blog.gif',
        still: './images/write-this-down.png',
        deployed: 'https://obscure-dusk-87979.herokuapp.com/',
        title: 'Talk Techy to Me - Tech Blog',
        github: 'https://github.com/Meljska-Fawn/talk_techy_to_me',
    },
];
const secondProjects = [
    {
        img: './images/bloom.png',
        deployed: 'https://bloomv1.herokuapp.com/',
        title: 'Bloom - Track Your Carbon Footprint',
        github: 'https://github.com/Meljska-Fawn/bloom',
    },
    {
        img: './images/mindful-cal-c.gif',
        still: './images/write-this-down.png',
        deployed: 'https://aboubacar7.github.io/mindful-cal-c/',
        title: 'Mindful (Cal)c',
        github: 'https://github.com/Meljska-Fawn/mindful-calc-c',
    },
    {
        img: './images/write-this-down.png',
        still: './images/write-this-down.png',
        deployed: 'https://meljska-fawn.github.io/hey-write-this-down/',
        title: 'Hey! Write This Down',
        github: 'https://github.com/Meljska-Fawn/hey-write-this-down',
    },
];

