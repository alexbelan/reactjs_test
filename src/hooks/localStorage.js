import { useEffect, useState } from "react"

export const useLocalStorage = () => {
    const [token, setToken] = useState('')

    const setItem = (newToken) => {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }

    const removeItem = () => {
        setToken('')
        localStorage.removeItem('token')
    }

    const getItem = () => {
        setToken(() => localStorage.getItem('token') ?? '')
    }

    useEffect(() => {
        getItem()
    }, [])

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    return [token, {
        setItem,
        removeItem,
        getItem
    }]
}