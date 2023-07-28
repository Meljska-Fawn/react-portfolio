import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from 'react-bootstrap/Card';
import ProjectCard from './ProjectCard';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation_lk1q6wwx.json';
import { deepPurple } from '@mui/material/colors';
import techBlogGif from '../../images/tech-blog.gif';


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function Projects() {
    return (
        <>
            <div className="fixed w-full h-full top-0 left-0 z-[-1]" style={{ opacity: '0.4' }}>
                <Lottie options={defaultOptions} />
            </div>

            <div className="grid grid-cols-8 gap-4 mt-5">
                <div className="col-start-2 col-end-7 mt-5">
                    <img className="w-full" src="../../images/bloom.png" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="project-title">Bloom</div>
                    <p className="project-text">This organization engages in reforestation efforts worldwide. They aim to combat deforestation, restore ecosystems, and create a sustainable future for the planet.</p>
                </div>
            </div>

            <div className="my-3">
                <div className="grid grid-cols-6 gap-4 items-center justify-center h-screen">
                    <div className="mb-3">
                        <div className="mb-3">
                            {projects.map((project) => <ProjectCard project={project} />)}
                        </div>
                        <div >
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
                                                    <GitHubIcon sx={{ color: deepPurple[500] }} />
                                                </Card.Link>
                                            </Card.Title>
                                        </Card.Body>
                                    </a>
                                ))}
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
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
];

