import React from 'react'

interface InputParams {
    placeholder: string
    type?: string
    id?: string
    name?: string
    onChange?: any
    value?: any
}

const Input = ({value, placeholder, type, id, name, onChange}: InputParams) => {
  return (
    <input value={value} placeholder={placeholder} type={type} id={id} name={name} onChange={onChange} className="bg-white text-black rounded px-2 outline-none border border-gray-300 py-1"/>
  )
}

export default Input