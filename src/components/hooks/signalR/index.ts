import { useEffect, useState } from 'react'
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'

const useSignalR = (hubUrl: string) => {
  const [connection, setConnection] = useState<HubConnection | null>(null)
  const [messages, setMessages] = useState<string[]>([])
  const [connectionId, setConnectionId] = useState<string>('')

  useEffect(() => {
    const newConnection = new HubConnectionBuilder().withUrl(hubUrl).build()

    newConnection
      .start()
      .then(() => {
        // Lấy connectionId khi kết nối thành công
        const id = newConnection.connectionId
        if (id) {
          setConnectionId(id) // Cập nhật connectionId nếu có giá trị hợp lệ
        }
      })
      .catch((error) => console.error('connect failed', error))

    setConnection(newConnection)

    newConnection.on('OrderMessage', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      newConnection.stop()
    }
  }, [hubUrl])

  const sendResponseToCustomer = (
    customerConnectionId: string,
    message: string
  ) => {
    if (connection) {
      connection
        .invoke('SendMessageToCustomer', customerConnectionId, message)
        .catch((error) => console.error('Send message failed', error))
    }
  }

  return { messages, sendResponseToCustomer, connectionId }
}

export default useSignalR
