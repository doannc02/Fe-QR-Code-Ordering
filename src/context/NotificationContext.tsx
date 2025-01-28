import React, { createContext, useState, useContext, ReactNode } from 'react' // Import ReactNode

// Định nghĩa loại dữ liệu trong context
interface Notification {
  user: string
  message: string
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Notification) => void
}

// Tạo context
const NotificationContext =
  createContext<NotificationContextType | undefined>(undefined)

// Hook tùy chỉnh để sử dụng context
export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    )
  }
  return context
}

// Cung cấp dữ liệu context cho toàn bộ ứng dụng
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Định nghĩa kiểu children
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Notification) => {
  console.log(notification, 'in addNoti') 
    
    setNotifications((prev) => [...prev, notification])
  }
  console.log(notifications, 'in context') 
  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}
