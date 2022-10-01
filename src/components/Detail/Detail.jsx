import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './Detail.module.css'
function Detail() {

    let { name } = useParams()
    let char = useSelector(state => state.characters).find(e => e.name === name)

    if (char) {

        return (
            <div className={style.card}>
                <h1>{char.name}</h1>
                <img src={char.image} alt="asd" />
                <h2>Patronus: {char.patronus}</h2>
                <h2>House: {char.house}</h2>
                <h3>Actor/actress: {char.actor}</h3>
            </div>
        )
    }

    return <h1>No hay detalles</h1>
}

export default Detail


