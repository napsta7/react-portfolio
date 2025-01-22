//This is the reusable project component to be used in the  portfolio section.
//The title will be displayed as well as a screenshot, which can take a user to a deployed link.
//There is also a link to the GitHub repository for each project.
import React from 'react';

function Project({ title, deployedLink, imageSrc, githubLink }) {
    return(
        <div className='project'>
            <h3>{title}</h3>
            <a href={deployedLink}>
                <img src={imageSrc} height='200px' width='400px' alt={title} />
            </a>
            {githubLink && <a href={githubLink} className='githubLink'>GitHub</a>}
        </div>
    );
}

export default Project;