'use client'
import React from 'react'

export default function SwitchTheme({ isChecked, onChange }) {
  return (
    <label className="flex items-center cursor-pointer">
      <span className="mr-2">Тема</span>
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />
        <div className="w-12 h-6 bg-gray-300 dark:bg-cyan-600 rounded-full p-1">
          <div
            className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
              isChecked ? 'transform translate-x-6' : ''
            }`}
          />
        </div>
      </div>
    </label>
  )
}