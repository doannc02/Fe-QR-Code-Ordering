import {
  ArrowUpward,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import { Box, IconButton, Link, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Hàm kiểm tra vị trí cuộn và hiển thị nút "Trở về đầu trang"
  const handleScroll = () => {
    // Kiểm tra vị trí cuộn và điều chỉnh theo yêu cầu

    setShowBackToTop(true)
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
    // Thêm sự kiện scroll
    window.addEventListener('scroll', handleScroll)

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      component='footer'
      sx={{
        py: 6,
        position: 'relative',
      }}
      style={{
        zIndex: 100,
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        background:
          'linear-gradient(270deg, #1E3A8A, #1E40AF, #3B82F6, #60A5FA)',
        backgroundSize: '400% 400%',
        animation: 'gradientBackground 10s ease infinite',
      }}
    >
      {/* Container */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 4 }}>
        {/* Footer nội dung */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Section 1: Liên kết */}
          <Box>
            <Typography
              variant='h6'
              sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2 }}
            >
              Liên kết
            </Typography>
            <Box component='ul' sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['Trang chủ', 'Giới thiệu', 'Dịch vụ', 'Liên hệ'].map(
                (link, index) => (
                  <Box component='li' key={index} sx={{ mb: 1 }}>
                    <Link
                      href='#'
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#93c5fd',
                          transition: 'color 0.3s',
                        },
                      }}
                    >
                      {link}
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Box>

          {/* Section 2: Thông tin liên hệ */}
          <Box>
            <Typography
              variant='h6'
              sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2 }}
            >
              Thông tin liên hệ
            </Typography>
            <Box component='ul' sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component='li' sx={{ mb: 1 }}>
                Địa chỉ: 1234 Đường XYZ, Hà Nội
              </Box>
              <Box component='li' sx={{ mb: 1 }}>
                Email: support@example.com
              </Box>
              <Box component='li' sx={{ mb: 1 }}>
                SĐT: +84 123 456 789
              </Box>
            </Box>
          </Box>

          {/* Section 3: Mạng xã hội */}
          <Box>
            <Typography
              variant='h6'
              sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2 }}
            >
              Mạng xã hội
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[
                { icon: <Facebook />, link: 'https://facebook.com' },
                { icon: <Instagram />, link: 'https://instagram.com' },
                { icon: <Twitter />, link: 'https://twitter.com' },
                { icon: <YouTube />, link: 'https://youtube.com' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target='_blank'
                  sx={{
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Section 4: Bản quyền */}
          <Box>
            <Typography
              variant='h6'
              sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2 }}
            >
              Bản quyền
            </Typography>
            <Typography variant='body2'>
              © 2025 Doannc02. Tất cả các quyền được bảo vệ.
            </Typography>
          </Box>
        </Box>

        {/* Dòng phân cách */}
        <Box
          sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <Typography
            variant='body2'
            sx={{ textAlign: 'center', color: 'white' }}
          >
            Được phát triển bởi DevQueLua
          </Typography>
        </Box>
      </Box>

      {/* Nút "Trở về đầu trang" */}
      {showBackToTop && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: '#3b82f6',
            color: 'white',
            '&:hover': { backgroundColor: '#2563eb' },
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:active': { transform: 'scale(0.95)' },
            zIndex: 1000, // Đảm bảo nút hiển thị trên các phần tử khác
          }}
        >
          <ArrowUpward />
        </IconButton>
      )}
    </Box>
  )
}

export default Footer
