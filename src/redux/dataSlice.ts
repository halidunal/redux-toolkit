import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  data: any[] | null
}

const initialState: CounterState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    
  },
})

export const {  } = dataSlice.actions