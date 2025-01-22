//This is the navigation bar to be rendered in the header component, which is always at the top of the screen.
//There are links to the different sections of the website, and the class name of the link is changed based on whether it is active or not.
//This allows the title to be highlighted based on what page the user is on.

import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
                    <ul className = 'nav'>
                        <li className = 'navItem'>
                        <NavLink 
                            to='/' 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            About Me
                        </NavLink>
                        </li>
                        <li className = 'navItem'>
                        <NavLink 
                            to='/portfolio' 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Portfolio
                        </NavLink>
                        </li>
                        <li className = 'navItem'>
                        <NavLink 
                            to='/contact' 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Contact
                        </NavLink>
                        </li>
                        <li className = 'navItem'>
                        <NavLink 
                            to='/resume' 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Resume
                        </NavLink>
                        </li>
                    </ul>
                </nav>
    );
}

export default Navigation;