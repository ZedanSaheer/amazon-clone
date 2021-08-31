import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_bg">
                    <img src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80" alt="banner" className="home_bg-banner" />
                </div>
           {/*      <div className="home_bg-text">
                    to the future of <span className="home_bg-text-highlight">
                        E-commerce.
                    </span>
                </div>
                <div className="home_bg-text-two">
                    <span className="home_bg-text-highlight-two">
                        zedan saheer
                    </span> and his lucid dream brings you
                </div> */}
            </div>
            <div className="home_row-container">
                <div className="home_row">
                    <Product id={Math.random()*100} title="Apple iPhone XR (64GB) - Black" price={49.99} rating={1} image="https://m.media-amazon.com/images/I/519KIlHA2wL._AC_UY327_FMwebp_QL65_.jpg" />
                    <Product id={Math.random()*100} title="Apple iPhone 12 Pro Max (256GB) - Pacific Blue" price={129.99} rating={4} image="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg" />
                    <Product id={Math.random()*100} title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)" price={29.99} rating={5} image="https://m.media-amazon.com/images/I/71KVeQql77S._AC_UL480_FMwebp_QL65_.jpg" />
                </div>
                <div className="home_row">
                    <Product id={Math.random()*100} title="The Psychology of Money" price={499.99} rating={5} image="https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg" />
                    <Product id={Math.random()*100} title="World’s Most Popular Books to Achieve Success and Build a Fortune (Set of 4 Books)" price={599.99} rating={4} image="https://m.media-amazon.com/images/I/71Xkv-KOK6L._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
                <div className="home_row">
                    <Product id={Math.random()*100} title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL" price={999.99} rating={5} image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div className="footer">
                <p>All Copyrights Reserved 	&copy; Zedan Saheer</p>
            </div>
        </div>
    )
}

export default Home
