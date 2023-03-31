import React, { useState } from 'react';
import { TextInput, Radio, Group } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const baseValues = {
    name: '',
    nick: '',
    email: '',
    gender: '',
    password: '',
    password2: ''
}

const Signup = () => {
    const [values, setValues] = useState(baseValues)

    const handleChange = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('values', values)
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
                type="text"
                placeholder="Your name"
                name='name'
                onChange={handleChange}
                value={values.name}
                label="Name"
            />
            <TextInput
                type="text"
                placeholder="Your nick"
                name='nick'
                icon={<IconAt size="0.8rem" />}
                onChange={handleChange}
                value={values.nick}
                label="Nick"
            />
            <TextInput
                type="email"
                placeholder="Your email"
                name='email'
                onChange={handleChange}
                value={values.email}
                label="Email"
            />
            <Radio.Group
                name="gender"
                onChange={(e) => setValues(prev => ({...prev, gender: e}))}
                value={values.gender}
                label="Select gender"
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
                onChange={handleChange}
                value={values.password}
                label="Password"
            />
            <TextInput
                type="password"
                placeholder="Your repit password"
                name='password2'
                onChange={handleChange}
                value={values.password2}
                label="Repit password"
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signup