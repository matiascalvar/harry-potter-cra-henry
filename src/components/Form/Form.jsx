import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addChar } from '../../actions/actions'
// match, location, history
import { useNavigate } from 'react-router-dom'

function validate(input) {
    let errors = {}

    if (!input.nombre) {
        errors.nombre = "Name is required"
    }

    return errors
}

function Form() {

    let dispatch = useDispatch()
    let history = useNavigate()

    const [input, setInput] = useState({
        nombre: ""
    })

    const [errors, setErrors] = useState({})

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value.toLowerCase()
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!Object.keys(errors).length) {
            dispatch(addChar({
                name: input.nombre.charAt(0).toUpperCase() + input.nombre.slice(1),
                image: "https://wegotthiscovered.com/wp-content/uploads/2021/09/elijah-wood-frodo-baggins-the-shire.jpg"
            }))
            history("/")
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Escribir nombre' name="nombre" value={input.nombre} onChange={handleInputChange} />
                <input type="submit" value="Add" disabled={Object.keys(errors).length} />
            </form>
        </>
    )
}

export default Form