import { useInView } from 'react-intersection-observer'
import { OrderItem } from './orderItem'
import styles from '@/components/templates/Customer/Dashboard/components/ListItemOrder/item.module.css'
import { Grid } from '@mui/material'

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
        description={item.description}
      />
    </Grid>
  )
}

export default OrderItemWithAnimation
