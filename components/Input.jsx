'use client'
import React from 'react'


export default function Input({
  onChange,
  value,
  backgroundColor = 'bg-white',
  textColor = 'text-black',
  placeholder = '',
  disabled = false,
  className = '',
  position = 'text-left',
  type = 'text'
}) {
  return (
    <div className={position}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          ${backgroundColor} ${textColor}
          border border-gray-300 rounded-2xl px-4 py-3 w-full
          focus:outline-none focus:ring-2 focus:ring-cyan-400
          transition duration-200 transform hover:scale-[1.08]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
      />
    </div>
  );
}
