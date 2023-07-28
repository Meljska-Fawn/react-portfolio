import React from 'react';
import Image from 'react-bootstrap/Image';
import profilePhoto from '../../assets/profile-photo_bw.jpeg';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import KayakingIcon from '@mui/icons-material/Kayaking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import PhishingIcon from '@mui/icons-material/Phishing';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation_lk1q6wwx.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function About() {
    return (
        <>
            <div className="fixed w-full h-full top-0 left-0 z-[-1]" style={{ opacity: '0.4' }}>
                <Lottie options={defaultOptions} />
            </div>

            <div className="my-5">
                <div className="grid grid-cols-6 gap-4 items-center justify-center h-screen">
                    <div className="md:col-start-2 md:col-end-4 col-start-1 col-end-7 text-6xl sm:text-7xl place-self-center font-bold text-slate-700">
                        HI THERE!<br />
                        IT'S<br />
                        MELISSA
                    </div>
                    <div className="md:col-start-4 md:col-end-6 col-start-1 col-end-7 place-self-center">
                        <Image src={profilePhoto} className="img-fluid rounded-pill" style={{ border: '1px solid black', maxHeight: '400px' }}></Image>
                    </div>
                </div>

                <div className="grid grid-cols-6 gap-4 mt-5 items-center justify-center h-screen">
                    <div className="md:col-start-2 md:col-end-6 mt-5 col-start-1 col-end-7 px-4">
                        <div className="sm:my-4 text-3xl sm:text-5xl font-bold text-slate-700 leading-snug">I'm a Full-Stack Web Developer with a Graphic Design and Biology background. </div>
                        <div className="my-5 text-base sm:text-xl text-slate-600">I've spent the previous 2.5 years collecting data for NOAA as a fisheries biologist working on commercial fishing vessels. Now I'm integrating my passion for research, methods, models, organization, systems, data collection, and management with skills in design thinking and quality craftsmanship to create solutions for a better web presence and information display providing a rich human experience.</div>
                    </div>
                </div>

                <div className="grid grid-cols-6 gap-4 mt-5 items-center justify-center h-screen">
                    <div className="md:col-start-2 md:col-end-4 col-start-2 col-end-6">
                        <div className="text-xl font-bold text-slate-700">My favorite technologies to use are...</div>
                        <div className="mt-3">
                            <div className="mt-2 text-base sm:text-lg text-slate-600">JavaScript</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600">MongoDB</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600">Express.js</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600">React.js</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600">Node.js</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600">GraphQL</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600">MySQL</div>
                        </div>
                    </div>
                    <div className="md:col-start-4 md:col-end-6 col-start-2 col-end-6">
                        <div className="text-xl font-bold text-slate-700">When I'm not developing, I'm also passionate about...</div>
                        <div className="mt-3 ">
                            <div className="mt-2 text-base sm:text-lg text-slate-600"><KayakingIcon className="mr-4" />Whitewater Kayaking</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600"><DownhillSkiingIcon className="mr-4" />Skiing</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600"><DirectionsBikeIcon className="mr-4" />Mountain Biking</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600"><FilterHdrIcon className="mr-4" />Rock Climbing</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600"><ShoppingBasketIcon className="mr-4" />Mushroom Foraging</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600"><PhishingIcon className="mr-4" />Fly Fishing</div>
                            <div className="mt-2 text-base sm:text-lg text-slate-600"><SelfImprovementIcon className="mr-4" />Acro Yoga</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}