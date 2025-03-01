import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Header from './components/Header'
// import { useSelector } from 'react-redux'
// import Modal from './components/Modal'

function App() {
  // const {open, title, content, buttonText, buttonFunc} = useSelector((state:any) =>state.modal)
  return (
    <div>
      <BrowserRouter>
        <Header/>
        {/* {open && <Modal title={title} content={content} buttonFunc={buttonFunc} buttonText={buttonText}/>} */}
        <Routes>
          <Route index path="/" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
