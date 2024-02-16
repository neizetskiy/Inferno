import Logo from "../Logo/Logo"
import { NavLink } from "react-router-dom"
import "./Footer.css"
export default function Footer(){
    return(
        <>
        <footer>
            <div className="footer-items">
                <Logo />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque autem magnam labore aliquam? Ipsam corrupti doloribus itaque rem blanditiis explicabo!</p>
            </div>

            <div className="footer-items">
                <h4>меню</h4>
                <div className="f-links">
                    <NavLink className="link" to="/" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>ГЛАВНАЯ</NavLink>
                    <NavLink className="link" to="/catalog" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>КАТАЛОГ</NavLink>
                    <NavLink className="link" to="/sales" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>АКЦИИ</NavLink>
                    <NavLink className="link" to="/contacts" style={({isActive})=>({borderBottom: isActive ? '2px solid black' : 'none',})}>КОНТАКТЫ</NavLink>
                </div>
            </div>

            <div className="footer-items">
                <h4>контакты</h4>
                <div className="footer-info">
                        <p>Остались вопросы? Напишите нам <br />
                          <span>infernoshop@gmail.com</span>  
                        </p>
                </div>
                <div className="footer-info">
                    <p>Нужна консультация? Позвоните нам <br />
                          <span>+7 987 405 45 45</span>  
                    </p>
                </div>
            </div>
        </footer>
        </>
    )
}