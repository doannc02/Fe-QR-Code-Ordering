import { PageResponse } from "../type"

export interface Table {
  id: number | null
  tableNumber: string
  isOccupied: boolean
  qrCode: string
}


export type ResponseListTable = PageResponse<Table[]>
