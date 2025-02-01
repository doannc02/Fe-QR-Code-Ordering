import { useInView } from 'react-intersection-observer'
import { OrderItem } from './orderItem'
import { OrderItemOrderLoading } from './orderItemLoading'
import { Chip, Grid } from '@mui/material'
import styles from '@/components/templates/Customer/Dashboard/components/ListItemOrder/item.module.css'
import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const OrderItemWithAnimation = ({ item }: { item: any }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      lg={3}
      key={item.id}
      ref={ref}
      className={`${styles.fadeIn} ${inView ? styles.fadeInInView : ''}`}
    >
      <OrderItem
        foodItemId={item.id}
        imageUrl={item.imageUrl}
        name={item?.name}
        price={item.price}
      />
    </Grid>
  )
}

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

      {isLoading
        ? ['m', 'a', 'p'].map((i) => (
            <Grid key={i} item xs={12} sm={4} md={4} lg={4}>
              <OrderItemOrderLoading />
            </Grid>
          ))
        : items.map((item) => (
            <OrderItemWithAnimation key={item.id} item={item} />
          ))}
    </Grid>
  )
}
