import { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-scroll';
import './Navbar.scss';

export default function Navbar() {

    const [menuClicked, setMenuClicked] = useState(false);
    const [currentPage, setCurrentPage] = useState('');

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked);
    }

    const handleLinkClick = (pageName: string) => {
        setCurrentPage(pageName.charAt(0).toUpperCase() + pageName.slice(1));
    }

    return (
        <nav className="NavbarItems">
            <div className="nav-title">{currentPage}</div>
            <div className="menu-icon" onClick={handleMenuClick}>
                <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li>
                            <Link onClick={menuClicked ? handleMenuClick : () => {}}
                                className={item.cName}
                                activeClass="active"
                                onSetActive={handleLinkClick}
                                to={item.url}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-50}
                                duration={500}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}