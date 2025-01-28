import { OrderStore } from '@/redux/type'

export interface TypeOrder {
  Id: number | null
  customerId: string
  tableId: number
  orderDate: string
  totalAmount: number
  status: string
  paymentStatus: string
  orderItems: OrderStore[]
}

export type ParamsOrder = {
  search: string
}
