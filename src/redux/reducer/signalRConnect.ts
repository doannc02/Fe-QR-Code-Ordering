import { HubConnection } from '@microsoft/signalr'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import defaultValue from '../defaultValue'

const signalRConnectSlice = createSlice({
  name: 'signalConfig',
  initialState: defaultValue.signalRConnectDefault,
  reducers: {
    setSignalRConnection(state, action: PayloadAction<HubConnection>) {
      state.connection = action.payload
    },
    clearSignalRConnection: (state) => {
      if (state.connection) {
        state.connection.stop()
      }
      ;(state.connection = null),
        (state.totalUserConnect = 0),
        (state.messages = [])
    },
    setTotalConnect(state, action: PayloadAction<number>) {
      state.totalUserConnect = action.payload
    },
    setLstMessages(
      state,
      action: PayloadAction<{ user: string; message: any }>
    ) {
      state.messages.push(action.payload)
    },
  },
})

const { actions, reducer } = signalRConnectSlice
export const { setSignalRConnection, clearSignalRConnection } = actions
export default reducer
