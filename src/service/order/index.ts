import { commonApi } from '@/config/axios'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { PageResponse } from '../type'
import { ParamsOrder, TypeOrder } from './type'

const URL_ORDER = '/api/v1/order'

export const getListOrder = async (
  params: ParamsOrder
): Promise<PageResponse<TypeOrder[]>> => {
  const { data } = await commonApi({
    method: 'get',
    url: URL_ORDER + '/list',
    params: params,
  })

  return data
}

export const useQueryGetListOrder = (params: ParamsOrder, options?: any) => {
  return useQuery<PageResponse<TypeOrder[]>>(
    ['api/v1/order/list'],
    () => getListOrder(params),
    { ...defaultOption, ...options }
  )
}

export const getDetailOrder = async (
  orderId: number
): Promise<PageResponse<TypeOrder>> => {
  const { data } = await commonApi({
    method: 'get',
    url: URL_ORDER,
    params: {
      orderId,
    },
  })

  return data
}

export const useQueryGetDetailOrder = (orderId: number, options?: any) => {
  return useQuery<PageResponse<TypeOrder>>(
    ['api/v1/order/detail'],
    () => getDetailOrder(orderId),
    { ...defaultOption, ...options }
  )
}

export const actionOrder = async (req: {
  data: TypeOrder
  method: 'put' | 'delete' | 'post'
}): Promise<TypeOrder> => {
  const { data } = await commonApi({
    method: req.method,
    url: URL_ORDER,
    data: req.data,
  })
  return data
}
