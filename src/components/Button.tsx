const Button = ({onClick, text}: any) => {
  return (
    <button onClick={onClick} className='w-full h-10 bg-indigo-600 text-white flex items-center justify-center rounded cursor-pointer'>{text}</button>
  )
}

export default Button