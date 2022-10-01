import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import style from './Cards.module.css'
import { getChars } from '../../actions/actions'

function Cards() {

    let dispatch = useDispatch()
    let characters = useSelector(state => state.characters)

    useEffect(() => {
        if (!characters.length) {
            dispatch(getChars())
        }
    }, [characters.length, dispatch])

    return (
        <div className={style.main}>
            {characters.map(e => {
                return <Card
                    key={e.name}
                    name={e.name}
                    img={e.image}
                    house={e.house}
                />
            })}
        </div>
    )
}

export default Cards


// https://hp-api.herokuapp.com/api/characters