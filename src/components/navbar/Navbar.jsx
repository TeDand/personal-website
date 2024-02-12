import React from 'react'
import { useState } from 'react'
import { MenuItems } from './MenuItems'
import { VscListSelection, VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    const [toggleMobileNavbar, setToggleMobileNavbar] = useState(false)

    const handleToggleNavBar = () => {
        setToggleMobileNavbar(!toggleMobileNavbar)
    }

    const handleCloseNavBar = () => {
        setToggleMobileNavbar(false)
    }

    return (
        <nav className='NavbarItems Sticky'>
            <h1 className='NavbarLogo'>

                <Link
                    className='NavbarLogo'
                    activeClass="active"
                    to='landing'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleCloseNavBar}
                >TD</Link>
            </h1>
            <div onClick={handleToggleNavBar}>
                {toggleMobileNavbar ? <VscChromeClose className='NavbarDisplayIcons' /> : <VscListSelection className='NavbarDisplayIcons' />}
            </div>
            <ul className={toggleMobileNavbar ? 'NavMenu Active' : 'NavMenu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <Link
                            className='NavLinks'
                            activeClass="active"
                            to={item.url}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleToggleNavBar}
                            key={index}>{item.title}</Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
