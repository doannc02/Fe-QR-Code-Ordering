import { useNotification } from '@/context/NotificationContext'
import { ORANGE } from '@/helper/colors'
import { useAppSelector } from '@/redux/hook'
import SearchIcon from '@mui/icons-material/Search'
import {
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AvatarCustom } from './AvatarCustom'
import CustomizedBadges from './Badgecustom'
import { SwitchSystem } from './SwitchSystem'

export const Header = () => {
  const { notifications } = useNotification()

  useEffect(() => {
    console.log('Notifications updated:', notifications)
  }, [notifications])

  const user = useAppSelector((state) => state.userData)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const toggleDrawer = (open: boolean) => {
    setIsMenuOpen(open)
  }

  const handleNotificationClick = () => {
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const hasNewNotifications = notifications.length > 0

  return (
    <div
      className='h-[85px] flex justify-between xs:h-[155px] top-0 sticky'
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
      {/*desktop*/}
      <div className='hidden md:flex justify-between gap-10 h-full'>
        <SwitchSystem />
      </div>
      <div className='hidden md:flex items-center justify-around w-1/3 gap-10 h-full'>
        <h1 className='text-4xl font-bold text-center text-white animate-glow'>
          Nhà hàng DEV QUÊ LÚA
        </h1>
      </div>
      <div className='hidden md:flex items-center gap-6 px-5'>
        <CustomizedBadges />
        <Badge badgeContent={notifications.length} color='primary' max={99}>
          <div
            className={`relative ${hasNewNotifications ? 'animate-shake' : ''}`}
            onClick={handleNotificationClick}
          ></div>
        </Badge>
        <AvatarCustom
          email={user.email ?? ''}
          username={user.name}
          firstName={user?.fullname ?? ''}
          lastName={'lastName'}
        />
      </div>

      {/*mobile*/}
      <div className='flex md:hidden justify-between w-full items-center'>
        <div className='flex my-2 justify-around gap-3 items-center pl-7 relative'>
          <IconButton onClick={() => toggleDrawer(true)}>
            <Menu />
          </IconButton>
        </div>
        <h1 className='text-xl font-bold text-center text-white animate-glow'>
          Nhà hàng DEV QUÊ LÚA
        </h1>
        <div className='mr-10 flex items-center'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Badge badgeContent={notifications.length} color='primary' max={99}>
            <div
              className={`relative ${
                hasNewNotifications ? 'animate-shake' : ''
              }`}
              onClick={handleNotificationClick}
            ></div>
          </Badge>
          <CustomizedBadges />
        </div>
      </div>

      <Drawer
        anchor='left'
        open={isMenuOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div className='w-94'>
          <div
            style={{
              zIndex: 100,
              background:
                'linear-gradient(270deg, #1E3A8A, #1E40AF, #3B82F6, #60A5FA)',
              backgroundSize: '400% 400%',
              animation: 'gradientBackground 10s ease infinite',
            }}
            className='flex flex-col justify-around items-start p-4'
          >
            <Image
              style={{ border: '1px solid', borderRadius: '990px', zIndex: 21 }}
              width={60}
              height={60}
              alt='logo'
              src={require('static/images.ico')}
            />

            <Typography variant='body2' className='font-bold pt-3 text-white'>
              Ăn là sẽ nhớ - nhớ rồi sẽ tới ăn
            </Typography>

            <div
              className='absolute'
              style={{
                width: '100px',
                height: '100%',
                left: '180px',
                backgroundColor: ORANGE,
                clipPath:
                  'polygon(41% 0, 68% 48%, 41% 100%, 13% 100%, 41% 48%, 15% 0)',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          <List>
            <ListItem button>
              <ListItemText primary='Menu Item 1' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Menu Item 2' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Menu Item 3' />
            </ListItem>
          </List>
        </div>
      </Drawer>

      {/* Dialog hiển thị thông báo */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          <List>
            {notifications.map((noti, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${noti.user}: ${noti.message}`} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <button onClick={handleDialogClose}>Đóng</button>
        </DialogActions>
      </Dialog>

      {/* Thêm animation CSS cho gradient và glow */}
      <style>
        {`
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes glow {
            0%, 100% {
              text-shadow: none;
            }
            50% {
              text-shadow: 0 0 5px #fff, 0 0 10px #ff0080, 0 0 20px #ff0080;
            }
          }
          .animate-glow {
            animation: glow 3s ease-in-out infinite;
            animation-delay: 2s; /* Chờ 2 giây trước khi bắt đầu nhấp nháy */
          }
        `}
      </style>
    </div>
  )
}

export default Header
