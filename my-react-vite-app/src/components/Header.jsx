//This is the Header component to be rendered at the top of the webpage.
//This contains the Navigation component with the links to different sections of the website.
import Navigation from './Nav';

function Header() {
    return (
            <header>
                <h1>Paige Harvey Portfolio</h1>
                <hr/>
                <Navigation />
                <hr/>
            </header>
    );
}
export default Header;