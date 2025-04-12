'use client'
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../Providers'
import AuthForm from '@/components/AuthForm'

export default function LoginPage() {
  const router = useRouter()
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f9f9]  px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <AuthForm />
      </div>
    </div>
  )
}
