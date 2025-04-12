'use client'

import React, { useState, useContext } from 'react'
import { AuthContext } from '@/app/Providers'
import { useRouter } from 'next/navigation'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function AuthForm() {
  const router = useRouter()
  const { login } = useContext(AuthContext)

  const [User, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (User === 'Admin' && password === 'pswrd') {
      login()
      router.push('/')
    } else {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full h-full">
        <h1 className="text-2xl text-center font-lilita text-primary">Вход в систему</h1>

        <Input
          value={User}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
          bgColor="bg-[#f0f0f0]"
          textColor="text-black"
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          bgColor="bg-[#f0f0f0]"
          textColor="text-black"
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Button
          text="Войти"
          bgColor="bg-blue-500"
          textColor="text-white"
          pad='py-3'
        />
    </form>
  )
}
