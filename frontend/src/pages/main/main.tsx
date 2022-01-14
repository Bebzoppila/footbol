import useFetch from "../../hooks/useFetch"
import MainMenu from "./mainMenu"
import MainContent from "./mainContent"
import "./style.sass";
import useFilter from "../../hooks/useFilter";
import defaultState from "./defaultState"
import { useEffect, useState } from "react";
export type footbolCartType = {
    date: string
    scoreFtAway: number,
    scoreFtHome: number,
    teamAway: string,
    teamAwayImg: string,
    teamHome: string,
    teamHomeImg: string,
    tourNumber: string,
    stadium: string
}

const Main = () => {
    const [footbolData, updateUrlFootbol] = useFetch<footbolCartType[]>('http://127.0.0.1:5000/?limit=6', defaultState)
    const [limmitDate, setLimmitDate] = useState(6)
    const [filtredFootbolData, updateValueFilter] = useFilter<footbolCartType>(footbolData , ['teamHome', 'teamAway'], '')
    useEffect(()=> {
        updateUrlFootbol(`http://127.0.0.1:5000/?limit=${limmitDate}`)
    }, [limmitDate])
    return(
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <MainMenu updateValueFilter={updateValueFilter} />
                    <MainContent footbolInfo={filtredFootbolData()} />
                    <button onClick={() => setLimmitDate(limmitDate + 3)} className="main__btn">Загрузить ещё</button>
                </div>
            </div>  
        </main>
        )
}

export default Main