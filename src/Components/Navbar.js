import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center h-[12vh] m-auto w-[80%]">
                <div className="flex-1">
                    <h1 className="text-blue-500">Azany Business</h1>
                </div>
                <div className="flex flex-1 space-x-4 text-center">
                    <a href="" className="">Home</a>
                    <a href="" className="">Services</a>
                    <a href="" className="">Blog</a>
                    <a href="" className="">EN</a>
                    <a href="" className="">Contact</a>
                </div>
                <div className="space-x-4">
                    <button className="text-red-500 border border-red-500 rounded px-2 py-2">Create Account</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;