// components/TableManagement.tsx
import { Table } from '@/service/table/type'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'


const TableManagement: React.FC = () => {
  const [tables, setTables] = useState<any[]>([
    { id: '1', number: 1, status: 'available' },
    { id: '2', number: 2, status: 'available' },
    { id: '3', number: 3, status: 'available' },
  ])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedTable, setSelectedTable] = useState<Table | null>(null)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  const handleReserveTable = (table: Table) => {
    setSelectedTable(table)
    setDialogOpen(true)
  }

  const handleConfirmReservation = () => {
    if (!selectedTable || !customerName || !customerPhone) {
      setSnackbarMessage('Vui lòng nhập đầy đủ thông tin khách hàng.')
      setSnackbarOpen(true)
      return
    }

    const updatedTables = tables.map((t) =>
      t.id === selectedTable.id
        ? {
            ...t,
            status: 'reserved',
            customer: {
              id: Date.now().toString(),
              name: customerName,
              phone: customerPhone,
              bookingTime: new Date().toISOString(),
            },
          }
        : t
    )
    setTables(updatedTables)
    setDialogOpen(false)
    setSnackbarMessage('Đặt bàn thành công!')
    setSnackbarOpen(true)
  }

  const handleStartUsingTable = (table: Table) => {
    const updatedTables = tables.map((t) =>
      t.id === table.id
        ? {
            ...t,
            status: 'in-use',
            customer: {
              ...t.customer!,
              arrivalTime: new Date().toISOString(),
            },
            startTime: new Date().toISOString(),
          }
        : t
    )
    setTables(updatedTables)
    setSnackbarMessage('Bắt đầu sử dụng bàn thành công!')
    setSnackbarOpen(true)
  }

  const handleCheckoutTable = (table: Table) => {
    const updatedTables = tables.map((t) =>
      t.id === table.id
        ? {
            ...t,
            status: 'needs-cleaning',
            customer: undefined,
            startTime: undefined,
          }
        : t
    )
    setTables(updatedTables)
    setSnackbarMessage('Thanh toán thành công! Bàn cần được dọn dẹp.')
    setSnackbarOpen(true)
  }

  const handleCleanTable = (table: Table) => {
    const updatedTables = tables.map((t) =>
      t.id === table.id
        ? {
            ...t,
            status: 'available',
          }
        : t
    )
    setTables(updatedTables)
    setSnackbarMessage('Bàn đã được dọn dẹp và sẵn sàng sử dụng.')
    setSnackbarOpen(true)
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Quản lý bàn</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {tables.map((table) => (
          <div
            key={table.id}
            className={`p-4 rounded-lg shadow-md ${
              table.status === 'available'
                ? 'bg-green-200'
                : table.status === 'reserved'
                ? 'bg-yellow-200'
                : table.status === 'in-use'
                ? 'bg-blue-200'
                : 'bg-red-200'
            }`}
          >
            <h3 className='text-lg font-bold'>Bàn số {table.number}</h3>
            <p>Trạng thái: {table.status}</p>
            {table.customer && (
              <div className='mt-2'>
                <p>Tên khách: {table.customer.name}</p>
                <p>SĐT: {table.customer.phone}</p>
                {table.customer.bookingTime && (
                  <p>
                    Đặt trước lúc:{' '}
                    {new Date(table.customer.bookingTime).toLocaleString()}
                  </p>
                )}
                {table.customer.arrivalTime && (
                  <p>
                    Đến quán lúc:{' '}
                    {new Date(table.customer.arrivalTime).toLocaleString()}
                  </p>
                )}
              </div>
            )}
            <div className='mt-4 space-x-2'>
              {table.status === 'available' && (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => handleReserveTable(table)}
                >
                  Đặt bàn
                </Button>
              )}
              {table.status === 'reserved' && (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => handleStartUsingTable(table)}
                >
                  Khách đến
                </Button>
              )}
              {table.status === 'in-use' && (
                <Button
                  variant='contained'
                  color='error'
                  onClick={() => handleCheckoutTable(table)}
                >
                  Thanh toán
                </Button>
              )}
              {table.status === 'needs-cleaning' && (
                <Button
                  variant='contained'
                  color='warning'
                  onClick={() => handleCleanTable(table)}
                >
                  Dọn bàn
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Đặt bàn</DialogTitle>
        <DialogContent>
          <TextField
            label='Tên khách hàng'
            fullWidth
            margin='normal'
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <TextField
            label='Số điện thoại'
            fullWidth
            margin='normal'
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Hủy</Button>
          <Button onClick={handleConfirmReservation} color='primary'>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity='info'>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default TableManagement
