import { Box, Grid, Skeleton } from '@mui/material'

export const OrderItemOrderLoading = () => {
  return ['m', 'a', 'p', 's'].map((i, index) => (
    <Grid key={index} item xs={12} sm={4} md={3} lg={3}>
      <Box className='bg-white rounded-md border-2 border-black flex flex-row lg:flex-col p-4 w-full'>
        <Box className='w-1/3 h-[115px] lg:w-full lg:h-[150px] rounded-md overflow-hidden flex justify-center items-center'>
          <Skeleton
            variant='rectangular'
            width='100%'
            height='100%'
            className='rounded-md'
          />
        </Box>

        <Box className='flex-1 pl-4 lg:pl-0 lg:pt-4 relative'>
          {/* Name and Price */}
          <Box className='flex justify-between'>
            <Skeleton
              variant='text'
              width='60%'
              height={30}
              className='lg:text-lg lg:font-bold'
            />
            <Skeleton
              variant='text'
              width='30%'
              height={30}
              className='lg:text-lg'
            />
          </Box>

          <Box className='flex items-center justify-start mt-1'>
            <Skeleton variant='text' width='20%' height={20} className='mr-5' />
            <Skeleton variant='text' width='20%' height={20} />
          </Box>

          <Box className='mt-1'>
            <Skeleton variant='text' width='80%' height={20} />
            <Skeleton variant='text' width='60%' height={20} />
          </Box>

          <Box className='flex items-center justify-between mt-2'>
            <Box className='flex gap-4 w-full justify-between'>
              <Box className='flex-1'>
                <Skeleton variant='rectangular' width='100%' height={30} />
              </Box>

              <Box className='flex-shrink-0'>
                <Skeleton variant='rectangular' width={100} height={30} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  ))
}
