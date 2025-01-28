import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import defaultValue from '../defaultValue'
import { OrderStore } from '../type'

const listOrderSlice = createSlice({
  name: 'listOrderDefault',
  initialState: defaultValue.listOrderDefault,
  reducers: {
    setListOrder(state, action: PayloadAction<OrderStore>) {
      const newItem = action.payload
      const existingItem = state.find((item) => item.name === newItem.name)
      if (existingItem) {
        existingItem.quantity += newItem.quantity
      } else {
        state.push(newItem)
      }
    },
    removeOrderItem(state, action: PayloadAction<string>) {
      const itemName = action.payload
      const indexRm = state.findIndex((item) => item.name === itemName)
      console.log(indexRm, itemName, 'log remove store')
      if (indexRm !== -1) {
        state.splice(indexRm, 1)
      }
    },
    resetListOrder() {
      return defaultValue.listOrderDefault
    },
  },
})

const { actions, reducer } = listOrderSlice
export const { setListOrder, removeOrderItem,resetListOrder } = actions
export default reducer
