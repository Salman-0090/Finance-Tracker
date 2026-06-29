"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


export default function HamburgerNavigation({isOpen, setIsOpen}) {
    
    return (
   
            <button className="text-2xl text-blue-100 cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
            <RxHamburgerMenu />
        </button>
    
    
    )
}