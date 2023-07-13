import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from 'react-bootstrap/Card';

export default function ProjectCard({project}) {
    const [hover, setHover] = useState(false);

    return (
        <Card style={{ width: '30rem' }} className="flex flex-wrap -m-4 mb-3" onMouseOver={()=>{setHover(!hover)}}>
            <a href={project.deployed} key={project.img} className="position-relative dark-link">
                <img
                    alt="gallery"
                    className="img-fluid rounded"
                    src={hover ? project.img : project.still}
                />
                <Card.Body>
                    <Card.Title className="">
                        {project.title}<Card.Link href={project.github} className="dark-link">
                            <GitHubIcon />
                        </Card.Link>
                    </Card.Title>
                </Card.Body>
            </a>
        </Card>
    );
}