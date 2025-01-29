import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import defaultValue from '../defaultValue'
import { CurrentLogin } from '../type'

const userConfigSlice = createSlice({
  name: 'currentLogin',
  initialState: defaultValue.userLoginDefault,
  reducers: {
    setCurrentLogin(state, action: PayloadAction<CurrentLogin>) {
      state.id = action.payload.id
      state.name = action.payload.name
      state.fullname = action.payload.fullname
      state.email = action.payload.email
      state.avatar = action.payload.avatar
      state.tableId = action.payload.tableId
    },
  },
})

const { actions, reducer } = userConfigSlice
export const { setCurrentLogin } = actions
export default reducer
