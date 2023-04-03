import React from 'react'
import Signin from './components/Signin';
import Signup from './components/Signup';

const Form = () => {
    const handleSubmit = (values) => {
        console.log('values', values)
    }

    return (
        <>
            <Signin onSubmit={handleSubmit} />
            <hr />
            <Signup onSubmit={handleSubmit} />
        </>
    )
}

export default Form