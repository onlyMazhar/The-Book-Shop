import React from 'react';
import '../../../index.css'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-all all-text sm:footer-horizontal bg-neutral pt-10 px-2">

            <div className='container flex flex-col md:flex-row gap-5 justify-between text-[#777777] uppercase  mx-auto'>

                <div className='   text-black title-font text-xl md:text-4xl title-font' >
                    <p style={{ fontWeight: 600 }}>BOOK<span className='text-[#777777]' style={{ fontWeight: 300 }}>SHOP</span></p>
                </div>
                <nav className=' flex     flex-col space-y-2'>
                    <h6 className="title-font  text-xl md:text-3xl  font-medium mb-4 text-black normal-case">About us</h6>
                    <a className="link link-hover">vision </a>
                    <a className="link link-hover">careers </a>
                    <a className="link link-hover">articles </a>
                    <a className="link link-hover">service terms</a>
                    <a className="link link-hover">donate</a>

                </nav>
                <nav className='  flex  flex-col space-y-2'>
                    <h6 className="title-font  text-xl md:text-3xl  font-medium mb-4  text-black normal-case">Discover</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Books </a>
                    <a className="link link-hover">Authors </a>
                    <a className="link link-hover">Subjects</a>
                    <a className="link link-hover">Advanced Search</a>
                </nav>
                <nav className='flex  flex-col    space-y-2'>
                    <h6 className=" title-font  text-xl md:text-3xl  font-medium mb-4  text-black normal-case">My account</h6>
                    <a className="link link-hover">My Wishtlist</a>
                    <a className="link link-hover">View Cart</a>
                    <a className="link link-hover">My Wishtlist </a>
                    <a className="link link-hover">Track My Order</a>
                </nav>

                <nav className='  flex flex-col space-y-2'>
                    <h6 className="title-font text-xl  md:text-3xl  font-medium mb-4 text-black normal-case">Help</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>

            </div>
            <div className='flex  text-left md:text-center mt-5 md:mt-10 border-t-1 container mx-auto justify-around     border-t-[#e0e0e0] text-[#777777] pt-5 pb-5'>
                <p className='text-[.75rem]'>© 2025 BookShop. All rights reserved.</p>
                <div className='space-x-4 text-[.75rem]'>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Join Us</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;