import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  open: boolean
  title: string,
  content: string,
  buttonFunc?: any,
  buttonText?: any
}

const initialState: ModalState = {
  open: false,
  title: "",
  content: ""
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = !state.open;
    },
    closeModal: (state) => {
      state.open = false;
    }
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
