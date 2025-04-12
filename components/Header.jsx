// components/Header.js
'use client'
import React, { useContext, useState } from 'react'
import { AuthContext } from '@/app/Providers'
import { useRouter } from 'next/navigation'
import Button from './Button'
import SwitchTheme from '@/components/Switch'

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext)
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      document.documentElement.classList.toggle('dark', newMode)
      return newMode
    })
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-t dark:bg-gradient-to-b dark:to-gray-900 from-cyan-600 to-blue-700 text-white  p-5 flex justify-between items-center z-50 shadow-md">
      <h1 className="text-xl font-bold ml-2">Система колледжа</h1>
      <div className="flex items-center gap-4">
        
        {isAuthenticated && (
          <>
          <SwitchTheme isChecked={isDarkMode} onChange={toggleTheme} />
          <Button
              text="Выйти"
              onClick={handleLogout}
              textColor="text-white"
              className="bg-blue-600 px-6 text-base rounded-lg transition-transform"
              pad='py-2'
              hoverColor='hover:bg-red-600'
            />
          </>
        )}
      </div>
    </header>
  )
}
