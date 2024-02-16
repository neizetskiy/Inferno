import "./Cart.css"

import { carts } from "../../../data"
import CartProduct from "../CartProduct/CartProduct"
import SecondaryButton from "../SecondaryButton/SecondaryButton"


export default function Cart(){
    return(
        <>
        <div className="ReactModal__Content">
            <h2>Корзина</h2>
            <div className="cart-items">
                <div className="cart-products">
                    {carts.map((cart)=>(
                        <CartProduct key={cart.id} cart={cart} />
                    ))}
                </div>
                <div className="cart-info">
                    <h5>Сумма заказа</h5>
                    <div className="cart-info-price">
                        <p>Цена товара</p>
                        <h6>5400 ₽</h6>
                    </div>
                    <div className="cart-info-price">
                        <p>Доставка</p>
                        <h6>0 ₽</h6>
                    </div>
                    <hr />
                    <div className="cart-info-price">
                        <p id="finalprice">Итого</p>
                        <h6>5400 ₽</h6>
                    </div>
                    <div className="cart-info-form">
                        <input type="text" placeholder="🏷️ Промокод" />
                        <SecondaryButton padding="14px 39px" bgcolor="rgba(0,0,0,0.6)" color="white" borderrad="10px" hoverbgcolor="black" hovercolor="white">Ввод</SecondaryButton>
                    </div>
                    <SecondaryButton color="white" bgcolor="rgba(0,0,0,0.6)" hoverbgcolor="black" hovercolor="white" padding="16px 140px" borderrad="10px">Перейти к покупке →</SecondaryButton>
                </div>
            </div>
        </div>
        </>
    )
}