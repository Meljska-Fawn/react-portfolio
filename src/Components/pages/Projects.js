import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation_lk1q6wwx.json';
import { deepPurple } from '@mui/material/colors';
import techBlogGif from '../../images/tech-blog.gif';
import Bloom from '../../images/bloom.png';
import WeatherGif from '../../images/weather-dashboard.gif';
import JobGif from '../../images/jobstable_course.gif';
import MindGif from '../../images/mindful-cal-c.gif';


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function Projects() {

    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="fixed w-full h-full top-0 left-0 z-[-1]" style={{ opacity: '0.4' }}>
                <Lottie options={defaultOptions} />
            </div>

            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-6 mt-5">
                    <img className="w-full rounded mt-5" src={Bloom} alt="" />
                </div>
                <div className="col-start-2 col-end-3">
                    <div className="project-title">Bloom  <a href='https://github.com/Meljska-Fawn/bloom' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                </div>
                <div className="col-start-3 col-end-6 project-text">
                    Bloom is a site dedicated to taking the guesswork out of reducing your individual carbon footprint. It provides tools for calculating individual or combined carbon emissions, comparing them to averages, and making voluntary donations to environmental organizations to balance carbon emissions. The site also offers current air quality and temperature information, educational resources such as infographics and news articles, and an AI-powered chatbot called Bloom GPT for in-depth inquiries related to climate change.
                </div>
            </div>
{/* Jobstacle Course */}
            <div className="grid grid-cols-8 gap-5 mt-5">
                <div className="col-start-2 col-end-5 mt-5">
                    <img className="w-full rounded mt-5" src={JobGif} alt="" />
                    <div className="project-title">Jobstacle Course  <a href='https://github.com/Meljska-Fawn/Jobstacle-course' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text">
                        Bloom is a site dedicated to taking the guesswork out of reducing your individual carbon footprint.  It provides tools for calculating individual or combined carbon emissions, comparing them to averages, and making voluntary donations to environmental organizations to balance carbon emissions.
                    </div>
                </div>

                <div className="col-start-5 col-end-8 mt-5" onMouseOver={()=>{setHover(!hover)}}>
                    <img className="w-full rounded mt-5" src={hover ? techBlogGif : Bloom} alt="" />
                    <div className="project-title">Talk Techy to Me  <a href='https://github.com/Meljska-Fawn/talk_techy_to_me' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text">
                        Bloom is a site dedicated to taking the guesswork out of reducing your individual carbon footprint.  It provides tools for calculating individual or combined carbon emissions, comparing them to averages, and making voluntary donations to environmental organizations to balance carbon emissions.
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-8 gap-5 mt-5">
                <div className="col-start-2 col-end-5 mt-5">
                    <img className="w-full rounded mt-5" src={WeatherGif} alt="" />
                    <div className="project-title">Weather Forecast  <a href='https://github.com/Meljska-Fawn/5-day-weather-forecast' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text mb-5">
                        Bloom is a site dedicated to taking the guesswork out of reducing your individual carbon footprint.  It provides tools for calculating individual or combined carbon emissions, comparing them to averages, and making voluntary donations to environmental organizations to balance carbon emissions.
                    </div>
                </div>

                <div className="col-start-5 col-end-8 my-5">
                    <img className="w-full rounded mt-5" src={MindGif} alt="" />
                    <div className="project-title">Mindful (Cal)c  <a href='https://github.com/Meljska-Fawn/mindful-calc-c' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text mb-5">
                        Bloom is a site dedicated to taking the guesswork out of reducing your individual carbon footprint.  It provides tools for calculating individual or combined carbon emissions, comparing them to averages, and making voluntary donations to environmental organizations to balance carbon emissions.
                    </div>
                </div>
            </div>

            {/* <div className="my-3">
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
                </div> */}
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

