import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import Input from '../components/Input'
import ProductCard from '../components/ProductCard'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react'
import { createData, updateData } from '../redux/dataSlice'
import { closeModal } from '../redux/modalSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const Product = () => {
  const {open} = useSelector((state:any) =>state.modal)
  const {data, search} = useSelector((state:any) =>state.data)

  const filteredData = data.filter((item: any) => item.name.toLowerCase().includes(search))

  const [product, setProduct] = useState({name: "", description: "", price: "", url: ""})
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e: any, type: string) => {
    if(type == "url") {
        setProduct(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
    }else{
        setProduct(prev => ({...prev, [e.target.name]: e.target.value}))
    }
}
  const handleAdd = () => {
    dispatch(createData({...product, id:data.length+1}))
    dispatch(closeModal())
  }

  const handleSave = () => {
    dispatch(updateData({...product, id:editId}))
    dispatch(closeModal())
    navigate("/")
  }

  let editId = location?.search.split("=")[1];
  useEffect(() => {
    if(editId){
      setProduct(data.find((item: any) => item.id == editId))
    }
  },[])

  const content = (
    <div className="flex flex-col gap-2">
        <Input value={product.name} placeholder="Name" name="name" onChange={(e: any) => handleChange(e, "name")}/>
        <Input value={product.description} placeholder="Description" name="description" onChange={(e: any) => handleChange(e, "description")}/>
        <Input value={product.price} placeholder="Price" name="price" onChange={(e: any) => handleChange(e, "price")}/>
        <Input placeholder="Photo" name="url" type="file" onChange={(e: any) => handleChange(e, "url")}/>
        <Button text={editId ? "Save" : "Add"} onClick={editId ? handleSave:  handleAdd}/>
    </div>
  )
  return (
    <div className='p-10 flex flex-wrap gap-4'>
      {filteredData?.map((item: any, key: any) => (
        <ProductCard key={key} item={item}/>
      ))}
      {open && <Modal title={editId ? "Edit Product" : "Add Product"} content={content}/>}
    </div>
  )
}

export default Product