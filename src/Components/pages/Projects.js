import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation_lk1q6wwx.json';
import { deepPurple } from '@mui/material/colors';
// import techBlogGif from '../../images/tech-blog.gif';
import Bloom from '../../images/bloom.png';
// import WeatherGif from '../../images/weather-dashboard.gif';
// import JobGif from '../../images/jobstable_course.gif';
// import MindGif from '../../images/mindful-cal-c.gif';
import JobImg from '../../images/jobstacle.png';
import techBlogImg from '../../images/tech-blog-photo.png';
import WeatherImg from '../../images/weatherImg.png';
import MindImg from '../../images/mindfulImg.png';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';


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

            <div className="grid grid-cols-8 gap-4 mt-24 md:mt-36 lg:mt-48">
                <div className="col-start-2 col-end-8">
                    <img className="w-full rounded" src={Bloom} alt="" />
                </div>
                <div className="md:col-start-2 md:col-end-4 col-start-2 col-end-8">
                    <div className="main-project-title">Bloom<a href='https://github.com/Meljska-Fawn/bloom' target="_blank" rel="noopener noreferrer"><GitHubIcon className="ml-3" fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="my-4 md:my-10">
                        <button className="button-style rounded-full"><a className="text" href='https://bloom1.herokuapp.com/' target="_blank" rel="noopener noreferrer">Let's Go<DirectionsRunIcon className="ml-2" /></a></button>
                    </div>
                </div>
                <div className="md:col-start-4 md:col-end-8 col-start-2 col-end-8">
                    <div className="md:my-10 mb-3 text-base sm:text-xl font-bold text-slate-700">Bloom is a site dedicated to taking the guesswork out of reducing your individual carbon footprint.</div>
                    <div className="main-project-text mb-5">It provides tools for calculating individual or combined carbon emissions, comparing them to averages, and making voluntary donations to environmental organizations to offset carbon emissions. The site also offers current air quality and temperature information, educational resources such as infographics and news articles, and an AI-powered chatbot called BloomChat for in-depth inquiries related to climate change.
                    </div>
                </div>
            </div>
            {/* Jobstacle Course */}
            <div className="grid grid-cols-8 gap-5 mt-5">
                <div className="md:col-start-2 md:col-end-5 col-start-2 col-end-8 mt-5" onMouseOver={() => { setHover(!hover) }}>
                    <img className="w-full rounded mt-5" src={JobImg} alt="" />
                    <div className="project-title">Jobstacle Course  <a href='https://github.com/Meljska-Fawn/Jobstacle-course' target="_blank" rel="noopener noreferrer"><GitHubIcon className="github-icon" fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text">
                        This website is designed to empower users in tracking their job search journey, featuring comprehensive categories like 'Applied to' and 'Interviewed for'.
                    </div>
                    <div className="project-button">
                        <button className="button-style rounded-full"><a className="text" href='https://jobstacle-course.herokuapp.com/login' target="_blank" rel="noopener noreferrer">Let's Go</a><DirectionsRunIcon className="ml-2" /></button>
                    </div>
                </div>

                <div className="md:col-start-5 md:col-end-8 col-start-2 col-end-8 mt-5" onMouseOver={() => { setHover(!hover) }}>
                    <img className="w-full rounded mt-5" src={techBlogImg} alt="" />
                    <div className="project-title">Talk Techy to Me  <a href='https://github.com/Meljska-Fawn/talk_techy_to_me' target="_blank" rel="noopener noreferrer"><GitHubIcon className="github-icon" fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text">
                        This is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. It uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
                    </div>
                    <div className="project-button">
                        <button className="button-style rounded-full"><a className="text" href='https://obscure-dusk-87979.herokuapp.com/' target="_blank" rel="noopener noreferrer">Let's Go</a><DirectionsRunIcon className="ml-2" /></button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-8 gap-5 mt-5">
                <div className="md:col-start-2 md:col-end-5 col-start-2 col-end-8 mt-5" onMouseOver={() => { setHover(!hover) }}>
                    <img className="w-full rounded mt-5" src={WeatherImg} alt="" />
                    <div className="project-title">Weather Forecast  <a href='https://github.com/Meljska-Fawn/5-day-weather-forecast' target="_blank" rel="noopener noreferrer"><GitHubIcon className="github-icon" fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text mb-5">
                        This website allows the user to gain instant access to both the current and 5-day outlook weather forecast for any location in the United States.
                    </div>
                    <div className="project-button">
                        <button className="button-style rounded-full"><a className="text" href='https://meljska-fawn.github.io/5-day-weather-forecast/' target="_blank" rel="noopener noreferrer">Let's Go</a><DirectionsRunIcon className="ml-2" /></button>
                    </div>
                </div>

                <div className="md:col-start-5 md:col-end-8 col-start-2 col-end-8 my-5" onMouseOver={() => { setHover(!hover) }}>
                    <img className="w-full rounded mt-5" src={MindImg} alt="" />
                    <div className="project-title">Mindful (Cal)c  <a href='https://github.com/Meljska-Fawn/mindful-calc-c' target="_blank" rel="noopener noreferrer"><GitHubIcon className="github-icon" fontSize="large" sx={{ color: deepPurple[500] }} /></a></div>
                    <div className="project-text mb-5">This website provides the precise calorie content of each ingredient in a variety of delicious meals as well as an option to effortlessly view recipes and conveniently save them for future use.
                    </div>
                    <div className="project-button">
                        <button className="button-style rounded-full"><a className="text" href='https://aboubacar7.github.io/mindful-cal-c/' target="_blank" rel="noopener noreferrer">Let's Go</a><DirectionsRunIcon className="ml-2" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

// const projects = [
//     {
//         img: './images/weather-dashboard.gif',
//         deployed: 'https://meljska-fawn.github.io/5-day-weather-forecast/',
//         title: '5 Day Weather Forecast',
//         github: 'https://github.com/Meljska-Fawn/5-day-weather-forecast',
//     },
//     {
//         img: './images/jobstable_course.gif',
//         deployed: 'https://jobstacle-course.herokuapp.com/login',
//         title: 'Jobstacle Course',
//         github: 'https://github.com/Meljska-Fawn/Jobstacle-course',
//     },
//     {
//         img: './images/tech-blog.gif',
//         deployed: 'https://obscure-dusk-87979.herokuapp.com/',
//         title: 'Talk Techy to Me - Tech Blog',
//         github: 'https://github.com/Meljska-Fawn/talk_techy_to_me',
//     },
// ];
// const secondProjects = [
//     {
//         img: './images/bloom.png',
//         deployed: 'https://bloomv1.herokuapp.com/',
//         title: 'Bloom - Track Your Carbon Footprint',
//         github: 'https://github.com/Meljska-Fawn/bloom',
//     },
//     {
//         img: './images/mindful-cal-c.gif',
//         deployed: 'https://aboubacar7.github.io/mindful-cal-c/',
//         title: 'Mindful (Cal)c',
//         github: 'https://github.com/Meljska-Fawn/mindful-calc-c',
//     },
// ];

