import { useFormCustom } from '@/lib/form'
import { useQueryGetListCategories } from '@/service/category'
import { useQueryGetListFoodItems } from '@/service/foodItem'
import { ParamFoodItem } from '@/service/foodItem/type'
import _ from 'lodash'
import { useEffect, useState } from 'react'

const useBanner = () => {
  const { data: dataCategory, isLoading: isLoadingCategory } =
    useQueryGetListCategories()

  const [categoryId, setCategoryId] = useState<any>(null)

  const methodForm = useFormCustom<ParamFoodItem>({
    defaultValues: {
      search: '',
    },
  })

  const { handleSubmit, setValue, getValues } = methodForm

  const onChangeTab = (categoryId: any) => {
    setValue('categoryId', categoryId)
    setCategoryId(categoryId)
    onSubmit()
  }

  console.log(categoryId, 'categoryId')

  useEffect(() => {
    if ((dataCategory?.data ?? []).length > 0) {
      const firstCategoryId = dataCategory?.data[0].id
      setCategoryId(firstCategoryId)
    }
  }, [dataCategory?.data])

  const {
    data: dataFoodItems,
    isLoading: isLoadingFoodItems,
    isFetching,
    refetch,
  } = useQueryGetListFoodItems(
    {
      categoryId: categoryId,
    },
    {
      enabled: !!categoryId,
    }
  )

  useEffect(() => {
    if (categoryId) {
      refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId])

  const onSubmit = handleSubmit(async (input) => {
    setCategoryId(input.categoryId)
  })

  return [
    {
      dataCategory: dataCategory?.data ?? [],
      dataFoodItems: dataFoodItems?.data ?? [],
      isLoadingCategory,
      isLoadingFoodItems,
      isFetching,
      categoryId,
    },
    { onSubmit, onChangeTab, setCategoryId },
  ] as const
}

export default useBanner
