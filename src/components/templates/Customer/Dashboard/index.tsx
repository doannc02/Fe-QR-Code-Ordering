import { CoreButton } from '@/components/atoms/CoreButton'
import CoreInput from '@/components/atoms/CoreInput'
import PageContainer from '@/components/organism/PageContainer'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import HomePage from './components/Banner'
import { useDashboard } from './useDashboard'

const Dashboard = () => {
  const [values, handles] = useDashboard()

  const { isLoading, methodForm, openDialog } = values
  const { handleClose, onSubmit } = handles

  const { control } = methodForm

  return (
    <PageContainer title=''>
      <HomePage />

      <Dialog
        open={openDialog}
        style={{ zIndex: 99999999999 }}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiDialog-paper': {
            minWidth: 300,
            maxWidth: 600,
            width: '100%',
            borderRadius: 4,
            '@media (max-width:600px)': {
              width: '60%',
            },
          },
        }}
      >
        <form onSubmit={onSubmit}>
          <DialogTitle>Vui lòng nhập tên quý khách</DialogTitle>
          <DialogContent>
            <CoreInput
              className='pt-1'
              required
              rules={{
                required: 'Vui lòng nhập tên khách hàng',
              }}
              control={control}
              name='name'
              label='Tên khách hàng'
            />
          </DialogContent>
          <DialogActions>
            <CoreButton
              color='primary'
              type='submit'
              disabled={isLoading}
              loading={isLoading}
            >
              Xác nhận
            </CoreButton>
          </DialogActions>
        </form>
      </Dialog>
    </PageContainer>
  )
}

export default Dashboard
