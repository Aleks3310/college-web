'use client'
import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext(null)

export default function Providers({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated')
    const storedTheme = localStorage.getItem('theme')

    if (storedAuth === 'true') {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }

    if (storedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isAuthenticated, isDarkMode])

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
  }

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  if (isAuthenticated === null) return null 

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isDarkMode, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  )
}
