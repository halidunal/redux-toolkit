import { createSlice } from '@reduxjs/toolkit'

export interface DataState {
  data: any[] | null
  search: string
}

const initialState: DataState = {
  data: [],
  search: ""
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createData: (state: any, action) => {
      state.data = [...state.data, action.payload]
    },
    updateData: (state: any, action) => {
      state.data = [...state.data.map((item:any) => item.id == action.payload.id ? ({...item, ...action.payload}) : []) ]
    },
    deleteData: (state: any, action) => {
      state.data = [...state.data.filter((item:any) => item.id !== action.payload) ]
    },
    sortData: (state: any, action) => {
      state.data = [...state.data.sort((a:any,b:any) => action.payload == "asc" ? a.price - b.price : action.payload == "decs" ? b.price - a.price : null)]
    },
    searchData: (state: any, action) => {
      state.search = action.payload
    }
  },
})

export const { createData, updateData, deleteData, sortData, searchData } = dataSlice.actions

export default dataSlice.reducer

