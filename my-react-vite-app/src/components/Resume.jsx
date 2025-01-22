//This is the resume component to be rendered when the user selects the Resume section.
//There is a link to download the pdf of my resume.
function Resume() {
    return(
        <main>
            <h2 id='resume'>
                Resume
            </h2>
            <a href = '/Paige_Harvey_Resume.pdf' download className='download'>Download My Resume</a>
            <ul id='skills'>
                <h3>Front-end Proficiencies:</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <h3>Back-end Proficiencies:</h3>
                <li>Node.js</li>
                <li>SQL</li>
            </ul>
        </main>
    );
}

export default Resume;