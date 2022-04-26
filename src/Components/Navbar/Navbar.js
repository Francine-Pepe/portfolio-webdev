import './Navbar.css';
import { Icon } from '@iconify/react';
import Logo from './../../Images/Francine-Pêpe-(4).png';

export default function Navbar() {
    return (
        <>
        <nav className='navbar'>
            <a href='/' className='logo'><img src={Logo} alt="logo" /></a>
            <input type="checkbox" id="toggler" />
            <label htmlFor='toggler'><Icon icon="charm:menu-hamburger" width="50" height="50" /></label>
            <div className='menu'>
                <ul className='list'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/">Resumé</a></li>
                </ul>
            </div>
        </nav>
        
        </>
    );

}