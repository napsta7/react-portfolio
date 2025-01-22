//This is the About component to be rendered by default when the user visits the portfolio.
//It contains a sample profile icon and a description about me.
function About() {
    return(
        <main id='about'>
            <h2 id='aboutMe'>About Me</h2>
            <img src='/pfp.jpg' height = '75px' width= '100px'></img>
            <p>
            Hi! I'm a student software developer, currently enrolled in the SMU Full Stack Development Boot Camp. I have a passion for computers and the web, and I've developed skills in both front-end and back-end development throughout the boot camp. I'm driven to utilize and grow my skills to create efficient, unique, user-friendly web applications. If you'd like to get in touch, you can email me at paige.renee395@gmail.com. I would love to hear from you!
            </p>
        </main>
    );
}

export default About;