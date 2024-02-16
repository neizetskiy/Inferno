import "./Header.css"
import heartsvg from "/header/heart.svg"
import cartsvg from "/header/cart.svg"
import {NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import { useState } from "react"
import Search from "../Search/Search"

import ReactModal from "react-modal"
import Cart from "../Cart/Cart"


export default function Header(){
    
    const [ismodal, setModal] = useState(false)

    const openModal = () =>{
        setModal(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () =>{
        setModal(false)
        document.body.style.overflow = 'auto'
    }
    return(
        <>
        <header>
            <div className="header-items container">
            <Logo />
            <nav>
                <NavLink className="link" to="/" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>ГЛАВНАЯ</NavLink>
                <NavLink className="link" to="/catalog" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>КАТАЛОГ</NavLink>
                <NavLink className="link" to="/sales" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>АКЦИИ</NavLink>
                <NavLink className="link" to="/contacts" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>КОНТАКТЫ</NavLink>
            </nav>

            <div className="nav-icons">
                <Search />
                <button><img src={heartsvg} alt="" /></button>
                <button onClick={openModal}><img src={cartsvg} alt="" /></button>
                <ReactModal isOpen={ismodal} onRequestClose={closeModal}>
                    <Cart />
                </ReactModal>
                
            </div>
            </div>
            
        </header>
        </>
    )
}