import { CoreButton } from '@/components/atoms/CoreButton'
import CoreInput from '@/components/atoms/CoreInput'
import PageContainer from '@/components/organism/PageContainer'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import getConfig from 'next/config'
import HomePage from './components/Banner'
import { useDashboard } from './useDashboard'
import Image from 'next/image'

const {
  publicRuntimeConfig: { COMMON_URL },
} = getConfig()

const Dashboard = () => {
  const [values, handles] = useDashboard()

  const { isLoading, methodForm, openDialog } = values
  const { handleClose, onSubmit, setOpenDialog } = handles

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

      {/* Hiển thị danh sách người dùng */}
      {/* <div>
        <h3>Danh sách người dùng</h3>
        <ul>
          {users.map((user, index) => {
            console.log(user, 'log useruser')
            return (
              <li key={index} onClick={() => setSelectedUserId(user.id)}>
                {user.name} {user.Name}{' '}
                {user.Id === selectedUserId ? '(Đang chọn)' : ''}
              </li>
            )
          })}
        </ul>
      </div> */}

      {/* Hiển thị tin nhắn nhận được */}
      {/* <div>
        <h3>Messages</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              {msg.user}: {msg.message}
            </li>
          ))}
        </ul>
      </div> */}

      {/* Nút phản hồi */}
      {/* <CoreButton color='secondary' onClick={sendFeedback} variant='contained'>
        Phản hồi thử
      </CoreButton>
      <CoreButton
        color='secondary'
        onClick={() => {
          dispatch(clearSignalRConnection())
        }}
        variant='contained'
      >
        Disconnect test
      </CoreButton> */}
    </PageContainer>
  )
}

export default Dashboard
