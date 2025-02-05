import { Skeleton } from '@mui/material'

export const BannerSkeleton = () => {
  return (
    <>
      <Skeleton variant='rectangular' width='100%' height='20px' className='my-5' />
      <Skeleton variant='rectangular' width='100%' height='180px' />
    </>
  )
}
