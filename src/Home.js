import React from 'react'
import './Home.css'
import Product from './Product'

const Home = ({popUp}) => {

    return (
        <div className="home"> 
            <div className="home_container">
                <div className="home_bg">
                    <img src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80" alt="banner" className="home_bg-banner" />
                </div>
            </div>
            <div className="home_row-container">
                <div className="home_row">
                    <Product id={Math.random() * 100} title="Apple iPhone XR (64GB) - Black" price={49.99} rating={1} image="https://m.media-amazon.com/images/I/519KIlHA2wL._AC_UY327_FMwebp_QL65_.jpg" popUp={popUp}/>
                    <Product id={Math.random() * 100} title="Apple iPhone 12 Pro Max (256GB) - Pacific Blue" price={129.99} rating={4} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6kWobLxR89FjWVd86Xsf8k379Y5284lHTntu3lK52AlW6Vkl69JgcXPRetTYPY1Pge4&usqp=CAU" popUp={popUp}/>
                    <Product id={Math.random() * 100} title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)" price={29.99} rating={5} image="https://m.media-amazon.com/images/I/71KVeQql77S._AC_UL480_FMwebp_QL65_.jpg" popUp={popUp}/>
                </div>
                <div className="home_row">
                    <Product id={Math.random() * 100} title="The Psychology of Money" price={499.99} rating={5} image="https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg" popUp={popUp}/>
                    <Product id={Math.random() * 100} title="World’s Most Popular Books to Achieve Success and Build a Fortune (Set of 4 Books)" price={599.99} rating={4} image="https://m.media-amazon.com/images/I/71Xkv-KOK6L._AC_UY327_FMwebp_QL65_.jpg" popUp={popUp}/>
                </div>
                <div className="home_row">
                    <Product id={Math.random() * 100} title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL" price={999.99} rating={5} image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY327_FMwebp_QL65_.jpg" popUp={popUp}/>
                </div>
                <div className="home_row">
                    <Product id={Math.random() * 100} title="As a Man Thinketh by James Allen " price={49.99} rating={5} image="https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY327_FMwebp_QL65_.jpg" popUp={popUp}/>
                    <Product id={Math.random() * 100} title="Attitude Is Everything: Change Your Attitude ... Change Your Life! by Jeff Keller" price={129.99} rating={4} image="https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg" popUp={popUp}/>
                    <Product id={Math.random() * 100} title="The Book Thief: The life-affirming number one international bestseller by Markus Zusak  " price={29.99} rating={3} image="https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY327_FMwebp_QL65_.jpg" popUp={popUp}/>
                </div>
                <div className="home_row">
                    <Product id={Math.random() * 100} title="Acer Nitro 5 Intel Core i5-11th Generation 144 Hz Refresh Rate 15.6-inch (39.62 cms) Gaming Laptop (8GB Ram/512 GB SSD/Win10/GTX 1650 Graphics/Obsidian Black/2.2 Kg" price={1499.99} rating={5} image="https://images-eu.ssl-images-amazon.com/images/I/41x2hlOf3RS.jpg" popUp={popUp}/>
                    <Product id={Math.random() * 100} title="ASUS TUF Gaming F15 Laptop 15.6 (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10)" price={599.99} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/51NFeSAwNrL.jpg" popUp={popUp}/>
                </div>
            </div>
            <div className="footer">
                <p>All Copyrights Reserved 	&copy; Zedan Saheer</p>
            </div>
        </div>
    )
}

export default Home
