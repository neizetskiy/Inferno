import Button from "../Button/Button"
import "./EmptyError.css"

export default function EmptyError(){
    return(
        <>
        <div className="error">
            <div className="error-items">
                <h1>Упс... Страница не найдена</h1>
                <p>😔</p>
                <Button href="/" color="white" bgcolor="black">← На главную</Button>
            </div>
        </div>
        </>
    )
}