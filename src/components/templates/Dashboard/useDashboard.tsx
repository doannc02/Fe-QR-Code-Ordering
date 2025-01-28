import { generateCode } from '@/helper/autoGen'
import { useFormCustom } from '@/lib/form'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { setSignalRConnection } from '@/redux/reducer/signalRConnect'
import { setCurrentLogin } from '@/redux/reducer/userConfigReducer'
import { HubConnectionBuilder } from '@microsoft/signalr'
import getConfig from 'next/config'
import { useState } from 'react'
const {
  publicRuntimeConfig: { COMMON_URL },
} = getConfig()

export const useDashboard = () => {
  const dispatch = useAppDispatch()

  const idUser = useAppSelector((state) => state.userData.id)

  const handleClose = (event: React.SyntheticEvent, reason: string) => {
    if (reason === 'backdropClick') {
      return
    }
    setOpenDialog(false)
  }

  const [openDialog, setOpenDialog] = useState(!idUser)
  const [isLoading, setIsLoading] = useState(false)

  const [connection, setConnection] = useState<any>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [selectedUserId, setSelectedUserId] = useState<string>('')

  const joinRoom = async (user: { name: string; id: string }) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl(
          `${COMMON_URL}/orderHub?userId=${user.id}&userName=${user.name}`
        )
        .build()

      connection.on('ReceiveMessage', (user: string, message: string) => {
        setMessages((messages) => [...messages, { user, message }])
      })

      connection.on('UsersInRoom', (users: any[]) => {
        setUsers(users)
      })

      connection.onclose(() => {
        setConnection(null)
        setMessages([])
        setUsers([])
      })

      await connection.start()
      dispatch(setSignalRConnection(connection))

      await connection.invoke('JoinRoom', user.id)

      setConnection(connection)
    } catch (e) {
      console.log(e)
    }
  }

  const sendMessage = async (message: string) => {
    try {
      if (connection) {
        await connection.invoke('SendMessage', message)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const closeConnection = async () => {
    try {
      await connection?.stop()
    } catch (e) {
      console.log(e)
    }
  }

  const methodForm = useFormCustom<any>({
    defaultValues: {
      name: '',
    },
  })

  const { handleSubmit } = methodForm

  const onSubmit = handleSubmit(async (input) => {
    try {
      const idGen = generateCode(12, '')
      setIsLoading(true)
      await createUser(input.name, idGen)
      setIsLoading(false)
      setOpenDialog(false)

      await joinRoom({ name: input.name, id: idGen })
      await sendMessage('User đã xác nhận thành công.')
    } catch (error) {
      setIsLoading(false)
      alert('Có lỗi xảy ra khi tạo tài khoản')
    }
  })

  // Tạo người dùng và lưu vào redux
  const createUser = async (name: string, id: string) => {
    dispatch(
      setCurrentLogin({
        id: id,
        name: name,
      })
    )
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const sendFeedback = async () => {
    const feedbackMessage = 'Phản hồi từ người dùng: Cảm ơn bạn đã hỗ trợ!'
    if (selectedUserId) {
      await connection.invoke(
        'SendMessageToUser',
        selectedUserId,
        feedbackMessage
      )
    } else {
      alert('Vui lòng chọn người dùng để phản hồi.')
    }
  }

  return [
    { methodForm, isLoading, openDialog },
    { onSubmit, handleClose, setOpenDialog },
  ] as const
}
