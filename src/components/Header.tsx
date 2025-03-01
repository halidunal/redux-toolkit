import { FaPlusCircle } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { openModal } from "../redux/modalSlice";
import Input from "./Input";
import { searchData, sortData } from "../redux/dataSlice";

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between bg-indigo-600 text-white px-3 py-3">
        <div>Redux Toolkit</div>
            <div className="flex items-center gap-5">
                <div className="text-black bg-white rounded">
                    <select className="px-2" onChange={e => dispatch(sortData(e.target.value))}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <Input placeholder="Ara..." onChange={(e: any) => dispatch(searchData(e.target.value))}/>
                    <FaPlusCircle className="cursor-pointer" size={20} onClick={() => dispatch(openModal())}/>
                </div>
            </div>
        </div>
    )
}

export default Header