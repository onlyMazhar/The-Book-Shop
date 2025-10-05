import React from 'react';
import '../../../index.css'
import './Header.css'
import { NavLink } from 'react-router';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { RiBloggerFill } from 'react-icons/ri';

const Header = () => {

    const links = [
        { name: 'home', link: '' },
        { name: 'pages', link: '' },
        { name: 'shop', link: '' },
        { name: 'contact', link: '' },

    ]
    return (
        <div className="all-text  shadow-sm">
            <div className='hidden md:flex  border-b-1 border-b-[#e0e0e0] '>
                <div className='hidden md:flex   text-left md:text-center container mx-auto justify-between py-2  text-[#777777]'>
                    <div className='flex space-x-4 text-[.75rem]'>
                        <a className="link link-hover"><CiFacebook /></a>
                        <a className="link link-hover"><FaInstagram /></a>
                        <a className="link link-hover"><FaXTwitter /></a>
                        <a className="link link-hover"> <TiSocialLinkedinCircular /></a>
                        <a className="link link-hover"><RiBloggerFill /> </a>
                    </div>
                    <div className='space-x-4 text-[.75rem] w-[20%] flex justify-around'>
                        <a className="link link-hover">Account</a>
                        <a className="link link-hover">Cart:(0$)</a>
                        <a className="link link-hover">Search</a>

                    </div>
                </div>

            </div>
            <div className='container mx-auto navbar bg-base-100 px-0 bg-all'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu capitalize space-y-2 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links.map((link, i) => <NavLink key={i} to={link.link}>{link.name}</NavLink>)

                            }
                        </ul>
                    </div>
                    <div className='   text-black title-font text-xl md:text-4xl title-font' >
                        <p style={{ fontWeight: 600 }}>BOOK<span className='text-[#777777]' style={{ fontWeight: 300 }}>SHOP</span></p>
                    </div>
                    {/* <a className="btn btn-ghost text-xl md:text-4xl title-font">BOOKSHOP</a> */}

                </div>
                <div className="navbar-center hidden lg:flex md:ml-72">
                    <ul className="menu menu-horizontal px-1  uppercase space-x-16 md:ml-96">
                        {
                            links.map((link, i) => <NavLink key={i} to={link.link}>{link.name}</NavLink>)
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-6">
                    <a className="btn bg-[#E5E3DA]  border-[#C0C0C0]">Sign In</a>
                    <a className="btn bg-[#C0C0C0]">Sign Up</a>
                </div>

            </div>
        </div>
    );
};

export default Header;