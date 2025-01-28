import { commonApi } from '@/config/axios'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { PageResponse } from '../type'
import { TypeCategory} from './type'

const URL_CATEGORY = '/api/v1/category'

export const getListCategories = async (): Promise<PageResponse<TypeCategory[]>
> => {
  const { data } = await commonApi({
    method: 'get',
    url: URL_CATEGORY + '/list',
  })

  return data
}

export const useQueryGetListCategories = (options?: any) => {
  return useQuery<PageResponse<TypeCategory[]>>(
    ['api/v1/category/list'],
    () => getListCategories(),
    { ...defaultOption, ...options }
  )
}

export const actionCategory= async (req: {
  NotificationIds: number[]
  isRead?: boolean
  method: 'put' | 'delete'
}): Promise<any> => {
  const { data } = await commonApi({
    method: req.method,
    url: URL_CATEGORY,
    data: req,
  })
  return data
}
