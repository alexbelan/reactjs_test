import React, { useState } from 'react';
import { TextInput, Radio, Group } from '@mantine/core';

const Signup = () => {
    const [values, setValues] = useState({})

    const handleChange = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('values', values)
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
                type="text"
                placeholder="Your name"
                name='name'
                defaultValue={''}
                value={values.name}
                label="Name"
                withAsterisk
            />
            <TextInput
                type="text"
                placeholder="Your login"
                name='login'
                defaultValue={''}
                value={values.login}
                label="Login"
                withAsterisk
            />
            <TextInput
                type="email"
                placeholder="Your email"
                name='email'
                defaultValue={''}
                value={values.email}
                label="Email"
                withAsterisk
            />
            <Radio.Group
                name="gender"
                defaultValue=''
                value={values.gender}
                label="Select gender"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio value="man" label="Man" />
                    <Radio value="woman" label="Woman" />
                </Group>
            </Radio.Group>
            <TextInput
                type="password"
                placeholder="Your password"
                name='password'
                defaultValue={''}
                value={values.password}
                label="Password"
                withAsterisk
            />
            <TextInput
                type="password"
                placeholder="Your repit password"
                name='password2'
                defaultValue={''}
                value={values.password2}
                label="Repit password"
                withAsterisk
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signup