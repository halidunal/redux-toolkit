import { useState } from "react"
import { FaPen, FaTrash } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import { deleteData, updateData } from "../redux/dataSlice"
import { openModal } from "../redux/modalSlice"
import { useNavigate } from "react-router-dom"

const ProductCard = ({item}: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(openModal())
    navigate(`/?update=${item?.id}`)
  }
  return (
    <div className="w-[200px] h-[200px] relative roubded">
      <img src={item.url} className="w-full h-full rounded" alt=""/>
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
        <div className="text-lg font-semibold">{item?.name}</div>
        <div>{item?.price}</div>
      </div>
      <div className="absolute right-3 top-3 flex gap-4">
        <FaTrash className="text-black cursor-pointer" size={18} title="Remove" onClick={() => dispatch(deleteData(item?.id))}/>
        <FaPen className="text-black cursor-pointer" size={18} title="Edit" onClick={handleEdit}/>
      </div>
    </div>
  )
}

export default ProductCard