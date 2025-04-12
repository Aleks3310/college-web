'use client'
import React from 'react'


export default function Button({
  onClick,
  backgroundColor = 'bg-blue-500',
  hoverColor = 'hover:bg-teal-500',
  textColor = 'text-white',
  text = 'Кнопка',
  pad = 'py3',
  disabled = false,
  className = '',
  position = '',
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${backgroundColor} ${hoverColor} ${textColor}
        ${pad} w-full rounded-2xl font-semibold shadow-md
        transform transition duration-300 ease-in-out
        hover:scale-105
        disabled:opacity-50 disabled:cursor-not-allowed
        ${position} ${className}
      `}
    >
      {text}
    </button>
  );
}