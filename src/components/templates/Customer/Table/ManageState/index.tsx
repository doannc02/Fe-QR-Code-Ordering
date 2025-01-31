import React, { useState } from 'react'
import TableItemState from './Components/TableItemState'

const ManageTableStates = () => {
  const [tables, setTables] = useState([
    { id: 1, status: 'reserved', reservedTime: '2025-01-30T19:00:00', customerName: 'Nguyễn Văn A' },
    { id: 2, status: 'occupied', sitTime: '2025-01-30T18:30:00', customerName: 'Trần Thị B' },
    { id: 3, status: 'clean', customerName: '' },
    { id: 4, status: 'needsCleaning', customerName: '' },
    { id: 5, status: 'clean', customerName: '' },
    { id: 6, status: 'reserved', reservedTime: '2025-01-30T20:00:00', customerName: 'Lê Thị C' },
    { id: 7, status: 'occupied', sitTime: '2025-01-30T17:30:00', customerName: 'Nguyễn Văn D' },
    { id: 8, status: 'clean', customerName: '' },
    { id: 9, status: 'needsCleaning', customerName: '' },
  ])

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Phần trên của chữ U */}
      <div className="flex justify-center gap-4 w-full">
        {tables.slice(0, 3).map((table) => (
          <TableItemState
            key={table.id}
            tableId={table.id}
            status={table.status}
            sitTime={table.sitTime}
            reservedTime={table.reservedTime}
            customerName={table.customerName}
          />
        ))}
      </div>

      {/* Phần hai bên của chữ U */}
      <div className="flex justify-between gap-4 w-full mt-6">
        {tables.slice(3, 5).map((table) => (
          <TableItemState
            key={table.id}
            tableId={table.id}
            status={table.status}
            sitTime={table.sitTime}
            reservedTime={table.reservedTime}
            customerName={table.customerName}
          />
        ))}
      </div>

      {/* Phần đáy của chữ U */}
      <div className="flex justify-center gap-4 w-full mt-6">
        {tables.slice(5, 9).map((table) => (
          <TableItemState
            key={table.id}
            tableId={table.id}
            status={table.status}
            sitTime={table.sitTime}
            reservedTime={table.reservedTime}
            customerName={table.customerName}
          />
        ))}
      </div>
    </div>
  )
}

export default ManageTableStates
