import { Dashboard } from '@mui/icons-material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import HandymanIcon from '@mui/icons-material/Handyman'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import SchoolIcon from '@mui/icons-material/School'
import SubjectIcon from '@mui/icons-material/Subject'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { ReactNode } from 'react'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import { Table } from 'lucide-react'
export interface MenuPathProps {
  name: string
  path: string
  icon?: ReactNode
  isChecked?: boolean
  children?: MenuPathProps[]
  subMenu?: MenuPathProps[]
}

export const ACCOUNTING = 'accounting'

export const TRANSLATE = {
  COMMON: 'common',
}

export const MENU_URL = {
  CONFIG: '/config',
  ORDER_ADMIN: '/orderAdmin',
  TABLE: {
    LIST: '/table',
    MANAGE_STATE: '/table/manage',
  },
}

export const listMenuForAdminRoutes: MenuPathProps[] = [
  {
    name: 'Trang Chủ',
    path: '/dashboard',
    icon: <Dashboard />,
  },
  {
    name: 'Quản Lý Đơn Đặt',
    path: MENU_URL.ORDER_ADMIN,
    icon: <ManageAccountsIcon />,
  },

  {
    name: 'Quản Lý Bàn',
    path: 'tb',
    icon: <Table />,
    children: [
      {
        name: 'Danh Sách Bàn',
        path: MENU_URL.TABLE.LIST,
      },
      {
        name: 'Danh Sách Trạng Thái Bàn',
        path: MENU_URL.TABLE.MANAGE_STATE,
      },
    ],
  },
]

export const listMenuForUserRoutes: MenuPathProps[] = [
  {
    name: 'Trang Chủ',
    path: '/dashboard',
    icon: <Dashboard />,
  },
]
