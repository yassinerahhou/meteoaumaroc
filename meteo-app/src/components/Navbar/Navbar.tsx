import { useEffect } from 'react';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<HTMLElement | null>(null);

    const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const currentDropdown = event.currentTarget.parentElement;
        if (currentDropdown === openDropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(currentDropdown);
        }
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (openDropdown && !openDropdown.contains(event.target as Node)) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [openDropdown]);

    return (
        <nav role="navigation" className="nav">
            <div className="brandName">Meteo Maroc</div>
            <ul className="navItems">
                <li className="navItem">
                    <a href="#" className="navLink"><span>Home</span></a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink"><span>Services</span></a>
                </li>
                <li className="navItem">
                    <a href="#" className="navLink"><span>Pricing</span></a>
                </li>
                <li className="navItem">
                    <a href="#" className="navLink"><span>News</span></a>
                </li>
                <li className={`navItem dropdown ${openDropdown?.classList.contains('dropdown') ? 'showSubmenu' : ''}`}>
                    <a href="#" className="navLink" onClick={handleDropdownClick}><span>More</span></a>
                    <nav className="submenu">
                        <ul className="submenuItems">
                            <li className="submenuItem"><a href="#" className="submenuLink">About</a></li>
                            <li className="submenuItem"><a href="#" className="submenuLink">Contact</a></li>
                            <li className="submenuItem"><hr className="submenuSeperator" /></li>
                            <li className="submenuItem"><a href="#" className="submenuLink">Support</a></li>
                            <li className="submenuItem"><a href="#" className="submenuLink">FAQs</a></li>
                            <li className="submenuItem"><a href="#" className="submenuLink">Careers</a></li>
                        </ul>
                    </nav>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
