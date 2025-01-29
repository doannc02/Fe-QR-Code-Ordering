import { commonApi } from '@/config/axios'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { ResponseListTable, Table } from './type'
import { BaseResponse } from '../type'

const URL_TABLE = '/api/v1/table'

export const getListTable = async (): Promise<ResponseListTable> => {
  const { data } = await commonApi({
    method: 'get',
    url: URL_TABLE + '/list',
  })

  return data
}

export const useQueryGetListTable = (options?: any) => {
  return useQuery<ResponseListTable>(
    ['api/v1/table/list'],
    () => getListTable(),
    { ...defaultOption, ...options }
  )
}

export const getDetailTable = async (
  id: number
): Promise<BaseResponse<Table>> => {
  const { data } = await commonApi({
    method: 'get',
    url: URL_TABLE,
    params: { id },
  })

  return data
}

export const useQueryGetDetailTable = (id: number, options?: any) => {
  return useQuery<BaseResponse<Table>>(
    ['api/v1/table/detail'],
    () => getDetailTable(id),
    { ...defaultOption, ...options }
  )
}

export const actionTable = async (req: {
  data: Table[]
  method: 'post' | 'put' | 'delete'
}): Promise<any> => {
  const { data } = await commonApi({
    method: req.method,
    url: URL_TABLE,
    data: req.data,
  })
  return data
}
