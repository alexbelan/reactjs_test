import { useEffect, useState } from "react"

export const useLocalStorage = (text) => {
    const [token, setToken] = useState('')

    const setItem = (newToken) => {
        setToken(newToken)
    }

    const removeItem = () => {
        setToken('')
    }

    useEffect(() => {
        setToken(text)
        localStorage.setItem('token', text)
    }, [])

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    return [token, {
        setItem,
        removeItem,
    }]
}