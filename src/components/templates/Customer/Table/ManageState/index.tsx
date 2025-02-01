import TableManagement from './Components/TableItemState'

const ManageTableStates = () => {
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Quản lý trạng thái bàn
      </h1>
      <div className='flex flex-wrap justify-center gap-4'>
        <TableManagement />
      </div>
    </div>
  )
}

export default ManageTableStates
