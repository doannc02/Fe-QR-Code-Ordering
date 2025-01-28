import React, { useState, useEffect } from 'react'
import { Box, Typography, Link, IconButton } from '@mui/material'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Hàm kiểm tra vị trí cuộn và hiển thị nút "Trở về đầu trang"
  const handleScroll = () => {
    if (window.scrollY > 0) {
      // Hiển thị nút khi cuộn xuống quá 300px
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }
  }

  // Cuộn trang về đầu khi nút được nhấn
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt mà
    })
  }

  // Lắng nghe sự kiện cuộn
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box component='footer' className='bg-gray-800 text-white py-6'>
      {/* Container */}
      <Box className='container mx-auto px-4'>
        {/* Footer nội dung */}
        <Box className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Section 1: Liên kết */}
          <Box>
            <Typography variant='h6' className='text-xl font-bold mb-4'>
              Liên kết
            </Typography>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white hover:text-gray-400'>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-gray-400'>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-gray-400'>
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-gray-400'>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </Box>

          {/* Section 2: Thông tin liên hệ */}
          <Box>
            <Typography variant='h6' className='text-xl font-bold mb-4'>
              Thông tin liên hệ
            </Typography>
            <ul className='space-y-2'>
              <li className='text-white'>Địa chỉ: 1234 Đường XYZ, Hà Nội</li>
              <li className='text-white'>Email: support@example.com</li>
              <li className='text-white'>SĐT: +84 123 456 789</li>
            </ul>
          </Box>

          {/* Section 3: Mạng xã hội */}
          <Box>
            <Typography variant='h6' className='text-xl font-bold mb-4'>
              Mạng xã hội
            </Typography>
            <Box className='flex space-x-4'>
              <IconButton
                href='https://facebook.com'
                target='_blank'
                color='inherit'
              >
                <Facebook />
              </IconButton>
              <IconButton
                href='https://instagram.com'
                target='_blank'
                color='inherit'
              >
                <Instagram />
              </IconButton>
              <IconButton
                href='https://twitter.com'
                target='_blank'
                color='inherit'
              >
                <Twitter />
              </IconButton>
              <IconButton
                href='https://youtube.com'
                target='_blank'
                color='inherit'
              >
                <YouTube />
              </IconButton>
            </Box>
          </Box>

          {/* Section 4: Bản quyền */}
          <Box className='col-span-1 sm:col-span-2 md:col-span-1'>
            <Typography variant='h6' className='text-xl font-bold mb-4'>
              Bản quyền
            </Typography>
            <Typography variant='body2' className='text-white'>
              © 2025 Công ty ABC. Tất cả các quyền được bảo vệ.
            </Typography>
          </Box>
        </Box>

        {/* Dòng phân cách */}
        <Box className='mt-6 border-t border-gray-600 pt-4'>
          <Typography variant='body2' className='text-center text-white'>
            Được phát triển bởi Công ty ABC
          </Typography>
        </Box>
      </Box>

      {/* Nút "Trở về đầu trang" */}
      {showBackToTop && (
        <IconButton
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700'
        >
          ↑
        </IconButton>
      )}
    </Box>
  )
}

export default Footer
