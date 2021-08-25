import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_bg">
                    <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=771&q=80" alt="banner" className="home_bg-banner" />
                </div>
                <div className="home_bg-text">
                    to the future of <span className="home_bg-text-highlight">
                        E-commerce.
                    </span>
                </div>
                <div className="home_bg-text-two">
                    <span className="home_bg-text-highlight-two">
                        zedan saheer
                    </span> and his lucid dream brings you
                </div>
            </div>
            <div className="home_row-container">
                <div className="home_row">
                    <Product title="Apple iPhone XR (64GB) - Black" price="41,999" rating={1} image="https://m.media-amazon.com/images/I/519KIlHA2wL._AC_UY327_FMwebp_QL65_.jpg" />
                    <Product title="Apple iPhone 12 Pro Max (256GB) - Pacific Blue" price="1,28,999.00 " rating={4} image="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg" />
                    <Product title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)" price="49,999" rating={5} image="https://m.media-amazon.com/images/I/71KVeQql77S._AC_UL480_FMwebp_QL65_.jpg" />
                </div>
                <div className="home_row">
                    <Product title="The Psychology of Money" price="40,000" rating={5} image="https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg" />
                    <Product title="World’s Most Popular Books to Achieve Success and Build a Fortune (Set of 4 Books)" price="54,000" rating={4} image="https://m.media-amazon.com/images/I/71Xkv-KOK6L._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
                <div className="home_row">
                    <Product title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL" price="100,000,00" rating={5} image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home
