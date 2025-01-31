import { useState, useEffect } from 'react'
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'
import getConfig from 'next/config'
import PageContainer from '@/components/organism/PageContainer'
import { Typography } from '@mui/material'



const AdminOrder = () => {
  const [messages, setMessages] = useState([])
  const [connection, setConnection] = useState(null)



  return (
    <PageContainer title=''>
      <Typography variant='h6' padding={2}>Quản lý đơn</Typography>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

export default AdminOrder
