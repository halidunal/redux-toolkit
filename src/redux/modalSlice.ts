import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  open: boolean
}

const initialState: ModalState = {
  open: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    
  },
})

export const {  } = modalSlice.actions