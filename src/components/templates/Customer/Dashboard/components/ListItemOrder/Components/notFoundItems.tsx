import { Fastfood } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const NoProductsFound = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='50vh'
      textAlign='center'
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '32px',
      }}
    >
      <Fastfood style={{ fontSize: 100 }} />
      <Typography variant='h6' color='textSecondary' mt={2}>
        Hiện tại không có món ăn nào trong danh mục này.
      </Typography>
      <Typography variant='body2' color='textSecondary' mt={1}>
        Vui lòng thử lại với danh mục khác hoặc quay lại sau.
      </Typography>
    </Box>
  )
}

export default NoProductsFound
