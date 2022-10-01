import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

function Card({ name, img, house }) {
    return (
        <div className={style.card}>
            <img height="400px" src={img} alt="imagen" />
            <Link className={style.link} to={`detail/${name}`}><p>{name}</p></Link>
        </div>
    )
}

export default Card