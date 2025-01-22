//This is the webpage where the project components will be rendered. The props for each project are passed.
//Please note that I didn't have six deployed applications to choose from, and so some of these do not have a deployed link.
import Project from './Project';

function Portfolio() {
    return (
        <main>
            <h2 id='projects'>My Projects</h2>
            <div className='portfolioContainer'> {/* Add this div */}
                <section className='projectSection'>
                    <Project 
                        title='Weather Dashboard'
                        deployedLink='https://weather-dashboard-api-assignment.onrender.com/'
                        imageSrc='/weather.png'
                        githubLink='https://github.com/napsta7/weather-dashboard-api-assignment'
                    />
                </section>
                <section className='projectSection'>
                    <Project 
                        title='Audi BMW Auto Garage'
                        deployedLink='https://argadeps.github.io/Audi-and-BMW-Auto-Garage/'
                        imageSrc='/audibmw.png'
                        githubLink='https://github.com/argadeps/Audi-and-BMW-Auto-Garage'
                    />
                </section>
                <section className='projectSection'>
                    <Project 
                        title='Employee CMS'
                        deployedLink={null}
                        imageSrc='./tracker.png'
                        githubLink='https://github.com/napsta7/sql-emp-tracker'
                    />
                </section>
                <section className='projectSection'>
                    <Project 
                        title='Vehicle Builder'
                        deployedLink={null}
                        imageSrc='builder.png'
                        githubLink='https://github.com/napsta7/command-line-vehicle-builder'
                    />
                </section>
                <section className='projectSection'>
                    <Project 
                        title='README Generator'
                        deployedLink={null}
                        imageSrc='/readmegen.png'
                        githubLink='https://github.com/napsta7/dynamic-readme-generator'
                    />
                </section>
                <section className='projectSection'>
                    <Project 
                        title='Prework Study Guide'
                        deployedLink='https://napsta7.github.io/prework-study-guide/'
                        imageSrc='/study.png'
                        githubLink='https://github.com/napsta7/prework-study-guide'
                    />
                </section>
            </div> {/* Close the div here */}
        </main>
    );
}

export default Portfolio;