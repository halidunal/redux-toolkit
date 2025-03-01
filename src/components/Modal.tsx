import { FaCircleXmark } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import { closeModal } from "../redux/modalSlice";

const Modal = ({title, content}: any) => {
    const dispatch = useDispatch();
    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
            <div className='w-1/3 bg-white shadow-lg rounded p-4 border border-gray-300 text-gray-800 flex flex-col gap-2'>
                <div className="py-1 flex items-center justify-between gap-2">
                    <div className="border-b w-full border-gray-800 font-bold text-lg">{title}</div>
                    <FaCircleXmark size={25} onClick={() => dispatch(closeModal())} className="cursor-pointer hover:scale-110"/>
                </div>
                {content}
            </div>
        </div>
    )
}

export default Modal