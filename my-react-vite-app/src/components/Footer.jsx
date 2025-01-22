//The footer component is rendered at the bottom of the page.
//It contains images for GitHub and LinkedIn, which, when clicked, will navigate to my GitHub and my LinkedIn profiles respectively.
function Footer() {
    console.log("Footer is rendered");
    return (
        <section id='footerContainer'>
            <hr/>
            <footer>
                <section>
                    <div className='icon'>
                        <a href='https://github.com/napsta7'><img src='/github.jpg' height='50px' width='60px'></img></a>
                    </div>
                </section>
                <section>
                    <div className='icon'>
                        <a href='https://www.linkedin.com/in/paige-renee-9b7a86347/'><img src='linkedin.jpg' height='50px' width='60px'></img></a>
                    </div>
                </section>
            </footer>
        </section>
    );
}

export default Footer;