import AcUnitIcon from '@mui/icons-material/AcUnit'
import { Chip, Grid } from '@mui/material'
import { useState } from 'react'
import { OrderItem } from './orderItem'
import { OrderItemOrderLoading } from './orderItemLoading'

export const ListItemOrder = ({
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
    <Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
      <Grid item xs={12}>
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

      {isLoading
        ? ['m', 'a', 'p'].map((i) => {
            return (
              <Grid key={i} item xs={12} sm={4} md={4} lg={4}>
                <OrderItemOrderLoading />
              </Grid>
            )
          })
        : items.map((item, index) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={item.id}>
              <OrderItem
                foodItemId={item.id}
                imageUrl={item.imageUrl}
                name={item?.name}
                price={item.price}
                key={index}
              />
            </Grid>
          ))}
    </Grid>
  )
}
