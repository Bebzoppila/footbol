import { FC, useState } from "react"

type MainMenuProps = {
    updateValueFilter: (str: string) => void
}


const MainMenu:FC<MainMenuProps> = ({updateValueFilter}) => {
    const [inputState, setInputState] = useState('')

    return(
        <div className="main__menu menu">
            <div className="menu__item">
                <input value={inputState} onChange={event => setInputState(event.target.value)} className="menu__input" placeholder="Введите название комманды" type="text" />
                <button onClick={() => updateValueFilter(inputState)} className="menu__btn">Поиск</button>
            </div>
        </div>
    )
}

export default MainMenu