import { Box, CircularProgress, Skeleton } from '@mui/material'

export const OrderItemOrderLoading = () => {
  return (
    <Box className='bg-white rounded-md border-2 border-black flex p-2 w-full'>
      <Box className='w-1/3 p-3 flex justify-center items-center'>
        <Skeleton variant='rectangular' width={150} height={250} />
      </Box>
      <Box className='flex-1 pl-4'>
        <Skeleton variant='text' width='60%' height={30} />
        <Skeleton variant='text' width='40%' height={20} />
        <Skeleton variant='text' width='80%' height={20} />
        <Skeleton variant='text' width='40%' height={20} />
        <Box className='flex gap-4 mt-4'>
          <CircularProgress size={24} />
          <Skeleton variant='rectangular' width='100px' height={40} />
        </Box>
      </Box>
    </Box>
  )
}
