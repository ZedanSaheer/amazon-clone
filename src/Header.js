import React, { useState } from 'react'
import './Header.css'
import { AiOutlineSearch } from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue();
    const [menu, setMenu] = useState("");

    const handleAuth = () => {
        if (user) {
            auth.signOut();
            localStorage.clear();

            dispatch({
                type: 'EMPTY_BASKET',
            })

        }
    }
    const handleMenu = () => {
        let menuBox = document.getElementById('menu');

        if (menu === "") {
            setMenu("flex")
            menuBox.classList.toggle("active");
        } else {
            setMenu("")
            menuBox.classList.remove("active");
        }

        
        
    }

        return (
            <div className="header">
                <Link to="/">
                    <div className="header_logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 192.756 192.756"><path fillRule="evenodd" clipRule="evenodd" fill="#fff" fillOpacity="0" d="M0 0h192.756v192.756H0V0z" /><path d="M98.59 155.365H16.933L94.276 39.12h10.636l-4.572 6.87-66.889 100.514H98.59v8.861zm61.951-97.323c-2.557-3.859-6.094-7.137-10.104-9.456-3.848-2.226-8.111-3.547-12.318-3.618-5.803-.097-12.539 2.114-17.41 6.651-3.85 3.588-6.508 8.708-6.498 15.381.008 4.791 2.697 8.454 7.193 11.625 4.416 3.113 10.516 5.792 17.58 8.492l-3.93 7.968c-7.338-2.833-13.764-5.718-18.738-9.226-6.853-4.833-10.953-10.725-10.966-18.859-.014-9.413 3.803-16.698 9.338-21.854 6.619-6.166 15.734-9.172 23.568-9.04 5.734.097 11.479 1.86 16.613 4.83 5.166 2.989 9.732 7.225 13.043 12.225l-7.371 4.881zm-13.33 32.177c7.916 3.123 14.41 6.443 19.242 10.849 6.061 5.525 9.373 12.465 9.369 22.25-.004 9.119-4.475 17.332-11.211 23.324-6.934 6.168-16.346 10.01-25.715 10.01-8.275 0-15.826-2.479-22.281-6.494-7.137-4.439-12.922-10.775-16.844-17.699l7.686-4.361c3.227 5.699 7.979 10.91 13.83 14.549 5.115 3.182 11.084 5.146 17.609 5.146 7.195 0 14.455-2.979 19.83-7.762 4.949-4.4 8.232-10.301 8.234-16.713.004-7.008-2.283-11.896-6.463-15.709-4.037-3.682-9.906-6.586-17.213-9.426l3.927-7.964zm-68.739-42.24H27.575v-8.86h56.793l-5.896 8.86z" /></svg>
                    </div>
                </Link>
                <div className="hamburger-menu" id="menu" onClick={handleMenu}>
                    <div className="line top-line"></div>
                    <div className="line middle-line"></div>
                    <div className="line bottom-line"></div>
                </div>
                <div className="mobile-responsive-header" style={{ display: menu}}>
                    <div className="header_search">
                        <input type="search" name="search" className="header_search-input" autoComplete="off" placeholder="Search..." />
                        <div className="header_search-icon">
                            <AiOutlineSearch className="header_search-input-icon" />
                        </div>
                    </div>
                    <div className="header_nav">
                        <div className="header_nav-option" onClick={handleMenu}> <Link to={!user && '/login'}>
                            <span className="header_nav-option-one">hello {user?.email}!</span>
                            <span className="header_nav-option-two" onClick={handleAuth}>{user ? 'Sign out' : 'sign in'}</span>
                        </Link>
                        </div>


                        <div className="header_nav-option" onClick={handleMenu}> <Link to='/orders'>
                            <span className="header_nav-option-one">returns</span>
                            <span className="header_nav-option-two">& orders</span>
                        </Link>
                        </div>

                        <div className="header_nav-option" onClick={handleMenu}>
                            <span className="header_nav-option-one">your</span>
                            <span className="header_nav-option-two">prime</span>
                        </div>

                        <div className="header_cart" onClick={handleMenu}>
                            <Link to="/checkout" className="link-basket">
                                <FaCartArrowDown className="header_cart-icon" />
                                <span className="header_cart-count">
                                    {basket?.length}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Header
