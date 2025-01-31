import React, { useEffect, useState } from 'react'
import { Card, Typography, Avatar } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import PropTypes from 'prop-types'

const TableItemState = ({
  tableId,
  status,
  sitTime,
  reservedTime,
  customerName,
}: {
  tableId: number
  status: string
  sitTime: any
  reservedTime: any
  customerName: string
}) => {
  const [elapsedTime, setElapsedTime] = useState<any>(null)

  useEffect(() => {
    let timer: any
    if (status === 'occupied' && sitTime) {
      const sitDate = new Date(sitTime)

      if (!isNaN(sitDate.getTime())) {
        timer = setInterval(() => {
          const elapsed = Math.floor(
            (Number(new Date()) - sitDate.getTime()) / 1000
          )
          setElapsedTime(elapsed)
        }, 1000)
      }
    }

    return () => clearInterval(timer)
  }, [status, sitTime])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reserved':
        return '#cce7ff' // Màu xanh dương nhạt
      case 'occupied':
        return '#fff4c1' // Màu vàng nhạt
      case 'clean':
        return '#d3f9d8' // Màu xanh lá nhạt
      case 'needsCleaning':
        return '#ffe0e0' // Màu đỏ nhạt
      default:
        return ''
    }
  }

  const formatTime = (time: any) => {
    if (!time) return 'Chưa có thời gian'
    return new Date(time).toLocaleTimeString()
  }

  const formatElapsedTime = (seconds: any) => {
    if (seconds === null) return 'Chưa có thời gian'
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${hours}h ${minutes}m ${remainingSeconds}s`
  }

  return (
    <Card
      sx={{ backgroundColor: getStatusColor(status) }}
      className={`p-6 m-4  rounded-lg text-gray-800 w-80 shadow-md hover:shadow-lg transition-all ease-in-out duration-300`}
    >
      <Typography variant='h6' className='text-center text-xl font-medium'>
        Bàn {tableId}
      </Typography>

      <div className='flex justify-center mt-4'>
        <Avatar className='bg-gray-300 text-black p-2'>
          <PersonIcon />
        </Avatar>
      </div>

      <Typography className='text-center mt-2 text-base'>
        Trạng thái: {status}
      </Typography>

      {status === 'reserved' && (
        <div className='text-center mt-4'>
          <Typography className='font-semibold text-gray-700'>
            Thời gian đặt trước: {formatTime(reservedTime)}
          </Typography>
          <Typography className='mt-2 text-gray-600'>
            Tên khách: {customerName}
          </Typography>
        </div>
      )}

      {status === 'occupied' && (
        <div className='text-center mt-4'>
          <Typography className='font-semibold text-gray-700'>
            Thời gian đã ngồi: {formatElapsedTime(elapsedTime)}
          </Typography>
          <Typography className='mt-2 text-gray-600'>
            Tên khách: {customerName}
          </Typography>
        </div>
      )}

      {status === 'clean' && (
        <Typography className='text-center mt-4 text-lg font-medium text-green-600'>
          Bàn trống, sẵn sàng
        </Typography>
      )}

      {status === 'needsCleaning' && (
        <Typography className='text-center mt-4 text-lg font-medium text-red-600'>
          Bàn cần dọn
        </Typography>
      )}
    </Card>
  )
}

TableItemState.propTypes = {
  tableId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  sitTime: PropTypes.string,
  reservedTime: PropTypes.string,
  customerName: PropTypes.string,
}

export default TableItemState
