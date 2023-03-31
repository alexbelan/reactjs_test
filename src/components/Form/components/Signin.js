import React, { useState } from 'react'
import { TextInput } from '@mantine/core';

const baseValues = {
    email: '',
    password: '',
}

const Signin = () => {
    const [values, setValues] = useState(baseValues)

    const handleChange = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        reset()
    }

    const reset = () => {
        setValues(baseValues)
    }

    return (
        <form 
            onSubmit={handleSubmit}
        >
            <TextInput
                type="email"
                placeholder="Your email"
                name='email'
                onChange={handleChange}
                value={values.email}
                label="Email"
            />
            <TextInput
                type="password"
                placeholder="Your password"
                name='password'
                onChange={handleChange}
                value={values.password}
                label="Password"
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signin