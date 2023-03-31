import React, { useState } from 'react'
import { TextInput } from '@mantine/core';

const Signin = () => {
    const [values, setValues] = useState({})

    const handleChange = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        reset()
    }

    const reset = () => {
        setValues({})
    }

    return (
        <form 

            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            <TextInput
                type="email"
                placeholder="Your email"
                name='email'
                defaultValue={''}
                value={values.email}
                label="Email"
                withAsterisk
            />
            <TextInput
                type="password"
                placeholder="Your password"
                name='password'
                defaultValue={''}
                value={values.password}
                label="Password"
                withAsterisk
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signin