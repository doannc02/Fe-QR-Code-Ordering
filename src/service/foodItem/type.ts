export type TypeFoodItem = {
  Id: number | null
  name: string
  description: string
  price: number
  imageUrl: string | null
  categoryId: number
  categoryName: string | null
}

export type ParamFoodItem = {
  search?: string
  categoryId: number
}
