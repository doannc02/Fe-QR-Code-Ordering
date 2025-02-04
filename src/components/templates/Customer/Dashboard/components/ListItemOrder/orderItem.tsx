import { CoreButton } from '@/components/atoms/CoreButton'
import { CurrencyFormatCustom } from '@/components/atoms/CurrencyFormatCustom'
import QuantitySelector from '@/components/organism/CoreQuantitySelector'
import { successMsg } from '@/helper/message'
import { useFormCustom } from '@/lib/form'
import { useAppDispatch } from '@/redux/hook'
import { setListOrder } from '@/redux/reducer/listOrderReducer'
import { Alarm } from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { ReactElement } from 'react'
import { Ribbon, RibbonContainer } from 'react-ribbons'

export const OrderItem = (props: {
  foodItemId: number
  name: string
  notes?: string
  price: number
  imageUrl: string
}) => {
  const { foodItemId, name, notes, price, imageUrl } = props

  const imageURL =
    imageUrl.includes('http') || imageUrl.includes('data')
      ? imageUrl
      : 'https://via.placeholder.com/150'
  const defaultValues = {
    foodItemId: foodItemId,
    name: name,
    notes: notes || '',
    price: price,
    quantity: 1,
    imageUrl: imageURL,
  }
  const methodForm = useFormCustom({
    defaultValues,
  })
  const { control, handleSubmit, reset } = methodForm

  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit(async (input) => {
    if (input) {
      console.log(input, 'ip')
      dispatch(setListOrder(input))
      successMsg(`x${input.quantity} - ${input.name} vào đơn thành công!`)
      reset(defaultValues)
    }
  })

  return (
    <RibbonContainer>
      <Ribbon
        side='left'
        type='corner'
        size='normal'
        backgroundColor='#cc0000'
        color='#ccffff'
        fontFamily='sans'
        withStripes
      >
        Best sale
      </Ribbon>

      <form
        onSubmit={onSubmit}
        className='bg-white rounded-md border-2 border-black flex lg:flex-wrap p-4 w-full'
      >
        <div className='w-[32%] h-[110px] lg:h-full lg:w-full rounded-md overflow-hidden'>
          <Image
            src={imageURL}
            alt='Order Image'
            width={150}
            height={150}
            objectFit='cover'
            className='rounded-md lg:w-full'
          />
        </div>

        <div className='flex-1 pl-4 relative'>
          <div className='flex justify-between'>
            <Typography className='text-black font-semibold text-sm pt-4 xs:font-bold lg:text-lg lg:font-bold'>
              {name}
            </Typography>

            <CurrencyFormatCustom
              className='font-bold text-sm lg:text-lg pt-3'
              amount={price}
              showCurrencyName
            />
          </div>
          <div className='flex items-center justify-start mt-2'>
            <TextCustom
              className='mx-5'
              text='4.5'
              icon={
                <StarIcon
                  color='warning'
                  style={{ fontSize: 'inherit', opacity: 0.55 }}
                />
              }
            />
            <TextCustom
              text='15 min'
              icon={
                <Alarm
                  color='inherit'
                  style={{ fontSize: 'inherit', opacity: 0.55 }}
                />
              }
            />
          </div>
          <p
            className='text-[12px] font-thin mt-2 text-gray-700 lg:text-[16px]'
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              WebkitLineClamp: 2,
            }}
          >
            {notes || 'Dynamic text here'}
          </p>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex w-full justify-between'>
              <QuantitySelector
                initialQuantity={0}
                control={control}
                name='quantity'
              />
              <CoreButton theme='submit' type='submit'>
                Đặt
              </CoreButton>
            </div>
          </div>
        </div>
      </form>
    </RibbonContainer>
  )
}

const TextCustom = ({
  text,
  icon,
  className,
}: {
  className?: string
  text: string | ReactElement
  icon: ReactElement
}) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {icon}
      <Typography
        style={{ fontWeight: '500', fontSize: '10px', paddingTop: '5px' }}
        className='text-slate-500'
      >
        {text}
      </Typography>
    </div>
  )
}
