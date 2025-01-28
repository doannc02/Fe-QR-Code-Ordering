import React, { useEffect, useState } from 'react'
import { useNotification } from '@/context/NotificationContext' // Import useNotification hook
import { WHITE } from '@/helper/colors'
import { useAppSelector } from '@/redux/hook'
import {
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { Menu } from 'lucide-react'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import CustomizedBadges from './Badgecustom'
import { AvatarCustom } from './AvatarCustom'
import { SwitchSystem } from './SwitchSystem'

export const Header = () => {
  const { notifications } = useNotification() // Sử dụng context để lấy thông báo
  const { firstMainColor: GREEN_VIU } = useAppSelector(
    (state) => state.themeColorData
  )

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
      className='flex justify-between xs:h-[155px] top-0 sticky bg-gray-800'
      style={{
        zIndex: 100,
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/*desktop*/}
      <div className='hidden md:flex items-center w-2/3 justify-between gap-10 h-full'>
        <SwitchSystem />
      </div>
      <div className='hidden md:flex items-center gap-6 px-5'>
        <CustomizedBadges />
        <Badge badgeContent={notifications.length} color='primary' max={99}>
          <div
            className={`relative ${hasNewNotifications ? 'animate-shake' : ''}`}
            onClick={handleNotificationClick}
          >
            <NotificationsIcon />
            {hasNewNotifications && (
              <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-yellow-500 animate-pulse'>
                New
              </span>
            )}
          </div>
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
            >
              <NotificationsIcon />
              {hasNewNotifications && (
                <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-yellow-500 animate-pulse'>
                  New
                </span>
              )}
            </div>
          </Badge>
          <CustomizedBadges />
        </div>
      </div>

      <Drawer
        anchor='left'
        open={isMenuOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div className='w-94 p-4'>
          <>Nhà hàng xin chào</>
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
          <DialogContent>
            <List>
              {notifications.map((noti, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${noti.user}: ${noti.message}`} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <button onClick={handleDialogClose}>Đóng</button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Header
