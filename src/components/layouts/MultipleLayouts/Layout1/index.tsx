import { Box } from '@mui/material'
import { ReactNode, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import { useRecoilValue } from 'recoil'
import { isLoadingRecoil } from './isLoadingRecoil'
import LoadingOverlay from 'react-loading-overlay-ts'

export const Layout1 = ({ children }: { children: ReactNode }) => {
  const isLoading = useRecoilValue(isLoadingRecoil)

  // Thêm useEffect để đảm bảo footer không bị render trước nội dung chính
  useEffect(() => {
    if (!isLoading) {
      // Đảm bảo rằng body content được render sau khi loading đã kết thúc
    }
  }, [isLoading])

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text='Loading ...'
      styles={{
        overlay: {
          background: 'rgba(255, 255, 255, 0.7)', // Cải thiện sự minh bạch của overlay
          zIndex: 1000, // Đảm bảo overlay luôn nằm trên top
        },
      }}
    >
      <Box className='flex flex-col flex-1 h-screen  overflow-auto'>
        <Header />

        <Box className='w-full flex' sx={{ maxHeight: `calc( 100vh - 80px )` }}>
          {/* LeftMenu sẽ chỉ hiển thị trên desktop */}
          <Box className='hidden lg:block  p-4' sx={{ height: '100vh' }}>
            <LeftMenu />
          </Box>

          <Box
            className='flex flex-col bg-black w-full relative'
            sx={{
              minHeight: isLoading ? 'calc( 100vh - 45px )' : 'auto',
              height: `calc( 95vh - 45px )`,
              overflow: 'auto',
            }}
          >
            <Box className='w-full px-10'>{children}</Box>
          </Box>
        </Box>

        <Box className='w-full px-10 pt-10'>
          <Footer />
        </Box>
      </Box>
    </LoadingOverlay>
  )
}
