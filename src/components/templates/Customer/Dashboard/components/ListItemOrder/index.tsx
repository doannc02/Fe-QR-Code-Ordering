import { OrderItemOrderLoading } from '@/components/templates/Customer/Dashboard/components/Loadings/listFoodItemSkeleton'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { Chip, Grid } from '@mui/material'
import { useState } from 'react'
import NoProductsFound from './Components/notFoundItems'
import OrderItemWithAnimation from './Components/orderItemWithAnimation'

const ListItemOrder = ({
  items,
  isLoading,
}: {
  items: any[]
  isLoading: boolean
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleChipClick = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  return (
    <Grid container spacing={{ xs: 3, sm: 2, md: 3 }}>
      <Grid item xs={12} className='pt-2'>
        <Chip
          avatar={<AcUnitIcon />}
          clickable
          label='Bún'
          color={selectedCategories.includes('Bún') ? 'primary' : 'default'}
          onClick={() => handleChipClick('Bún')}
        />
        <Chip
          sx={{ margin: '0 10px 0 10px' }}
          clickable
          label='Nướng'
          color={selectedCategories.includes('Nướng') ? 'primary' : 'default'}
          onClick={() => handleChipClick('Nướng')}
        />
        <Chip
          clickable
          label='Tráng miệng'
          color={
            selectedCategories.includes('Tráng miệng') ? 'primary' : 'default'
          }
          onClick={() => handleChipClick('Tráng miệng')}
        />
      </Grid>

      {isLoading ? (
        <OrderItemOrderLoading />
      ) : items.length === 0 ? (
        <Grid item xs={12}>
          <NoProductsFound />
        </Grid>
      ) : (
        items.map((item) => (
          <OrderItemWithAnimation key={item.id} item={item} />
        ))
      )}
    </Grid>
  )
}

export default ListItemOrder
