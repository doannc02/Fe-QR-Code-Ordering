import { commonApi } from '@/config/axios'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { PageResponse } from '../type'
import { ParamFoodItem, TypeFoodItem } from './type'

const URL_FOOD_ITEM = '/api/v1/foodItem'

export const getListFoodItems = async (params: ParamFoodItem): Promise<
  PageResponse<TypeFoodItem[]>
> => {
  const { data } = await commonApi({
    method: 'get',
    url: URL_FOOD_ITEM + '/list',
    params: params
  })

  return data
}

export const useQueryGetListFoodItems = (params: ParamFoodItem, options?: any) => {
    console.log(params, 'logzz')
  return useQuery<PageResponse<TypeFoodItem[]>>(
    ['api/v1/foodItem/list'],
    () => getListFoodItems(params),
    { ...defaultOption, ...options }
  )
}

export const actionFoodItem = async (req: {
  NotificationIds: number[]
  isRead?: boolean
  method: 'put' | 'delete'
}): Promise<any> => {
  const { data } = await commonApi({
    method: req.method,
    url: URL_FOOD_ITEM,
    data: req,
  })
  return data
}
