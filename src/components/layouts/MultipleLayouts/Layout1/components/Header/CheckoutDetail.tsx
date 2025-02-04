import CoreInput from '@/components/atoms/CoreInput'
import { CurrencyFormatCustom } from '@/components/atoms/CurrencyFormatCustom'
import { TopAction } from '@/components/molecules/TopAction'
import QuantitySelector from '@/components/organism/CoreQuantitySelector'
import { useAppDispatch } from '@/redux/hook'
import { removeOrderItem } from '@/redux/reducer/listOrderReducer'
import { OrderStore } from '@/redux/type'
import { TypeOrder } from '@/service/order/type'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useFieldArray, useFormContext } from 'react-hook-form'

export const CheckoutDetail = () => {
  const methodFormCt = useFormContext<TypeOrder>()
  const { control, getValues } = methodFormCt

  const dispatch = useAppDispatch()

  const { fields: orderItems, remove: rmOrderItem } = useFieldArray({
    control,
    name: 'orderItems',
    keyName: 'key',
  })
  return (
    <Box>
      {orderItems.map((item, index) => (
        <Box key={item.key}>
          <Box
            className='rounded-xl'
            display='flex'
            justifyContent='space-between'
            my={2}
          >
            <Box display='flex' alignItems='center'>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={50}
                height={50}
                style={{ borderRadius: '8px', marginRight: '10px' }}
              />
              <Box>
                <Typography
                  variant='body2'
                  fontWeight='bold'
                  style={{ width: '150px' }}
                  className='pb-5'
                >
                  {item.name}
                </Typography>
                <QuantitySelector
                  control={control}
                  name={`orderItems.${index}.quantity`}
                />
              </Box>
            </Box>

            <Box>
              <Typography>Đơn giá:</Typography>
              <CurrencyFormatCustom
                className='pt-5'
                amount={Number(
                  (getValues(`orderItems.${index}.price`) ?? 0).toFixed(2)
                )}
                showCurrencyName
              />
            </Box>

            <TopAction
              actionList={['delete']}
              onDeleteAction={() => {
                rmOrderItem(index)
                dispatch(removeOrderItem(item.name))
              }}
            />
          </Box>
          <CoreInput
            control={control}
            name={`orderItems.${index}.description`}
            label={`Ghi chú cho món ${item.name}`}
            multiline
          />
        </Box>
      ))}
    </Box>
  )
}
