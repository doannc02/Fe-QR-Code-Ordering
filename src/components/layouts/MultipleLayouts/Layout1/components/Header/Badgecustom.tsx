import { CoreButton } from '@/components/atoms/CoreButton'
import { CurrencyFormatCustom } from '@/components/atoms/CurrencyFormatCustom'
import { CoreDialog } from '@/components/organism/CoreDialog'
import { errorMsg, successMsg } from '@/helper/message'
import { useFormCustom } from '@/lib/form'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { actionOrder } from '@/service/order'
import { TypeOrder } from '@/service/order/type'
import { convertCurrency } from '@/utils/convertNumToTxt'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Box,
  DialogActions,
  DialogContent,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Badge from '@mui/material/Badge'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { FormProvider } from 'react-hook-form'
import { useMutation } from 'react-query'
import { CheckoutDetail } from './CheckoutDetail'
import { getDateNow } from '@/utils/date/date'
import { useDialog } from '@/components/hooks/dialog/useDialog'
import { generateCode } from '@/helper/autoGen'
import { resetListOrder, setListOrder } from '@/redux/reducer/listOrderReducer'

const taxesAndFees = [
  { label: ' Thuế VAT (5%)', amount: 111.99 },
  { label: 'Thuế phục vụ', amount: 2.5 },
]

export default function CustomizedBadges() {
  const orderItems = useAppSelector((state) => state.listOrderData)
  const customerId = useAppSelector((state) => state.userData.id)

  const dispatch = useAppDispatch()
  const defaultValues = {
    customerId: String(customerId),
    tableId: 1,
    orderDate: getDateNow(),
    totalAmount: 0,
    status: 'Pending',
    paymentStatus: 'Unpaid',
    orderItems: orderItems,
  }

  console.log(defaultValues, 'defaultValues')

  const countTotalOrder = orderItems.length
  const methodForm = useFormCustom<TypeOrder>({
    defaultValues: defaultValues,
  })
  const { handleSubmit, reset, watch, setValue, getValues } = methodForm

  const { mutate, isLoading: isLoadingSubmit } = useMutation(actionOrder, {
    onSuccess: (data) => {
      successMsg('Tạo đơn hàng thành công!')
      setOpenDialog(false)
      dispatch(resetListOrder())
    },
    onError: (error) => {
      errorMsg(error, 'Lỗi hệ thống!!')
    },
  })

  const [openDrawer, setOpenDrawer] = React.useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)

  const isMobile = useMediaQuery('(max-width: 600px)')

  const toggleDrawer = (open: boolean) => () => {
    setOpenDrawer(open)
  }

  const toggleDialog = (open: boolean) => () => {
    setOpenDialog(open)
  }

  const calculateTotal = () => {
    const itemTotal = watch('orderItems').reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )
    const taxAndFeesTotal = taxesAndFees.reduce(
      (acc, fee) => acc + fee.amount,
      0
    )
    return itemTotal + taxAndFeesTotal
  }

  React.useEffect(() => {
    if (orderItems.length > 0) {
      reset({ ...defaultValues, orderItems: orderItems })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderItems, reset])

  React.useEffect(() => {
    setValue('totalAmount', calculateTotal())
    console.log(calculateTotal, 'total')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculateTotal, watch('orderItems')])

  const onSubmit = handleSubmit(async (input) => {
    console.log(input, 'submit')
    if (!customerId) {
      errorMsg('Không có thông tin khách hhàng')
      return
    }
    mutate({
      data: input,
      method: 'post',
    })
  })

  const totalAmount = getValues('totalAmount')
  return (
    <FormProvider {...methodForm}>
      <form onSubmit={onSubmit}>
        {countTotalOrder > 0 && (
          <IconButton
            aria-label='cart'
            onClick={isMobile ? toggleDrawer(true) : toggleDialog(true)}
          >
            <Badge
              className={`relative ${countTotalOrder ? 'animate-shake' : ''}`}
              badgeContent={countTotalOrder}
              color='primary'
              max={99}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        )}
        {/* Mobile: Drawer */}
        {countTotalOrder > 0 && (
          <Drawer
            anchor='bottom'
            open={openDrawer}
            onClose={toggleDrawer(false)}
            variant='temporary'
            PaperProps={{
              style: {
                paddingBottom: '20px',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              },
            }}
          >
            <div
              role='presentation'
              style={{
                width: '100%',
                padding: '15px 20px 10px 15px',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
                maxHeight: '76vh',
              }}
            >
              <Typography variant='h6' className='pb-5' gutterBottom>
                Thông tin đơn
              </Typography>
              <CheckoutDetail />
              <Divider />

              {taxesAndFees.map((tax) => (
                <Stack
                  key={tax.label}
                  direction={'row'}
                  justifyContent={'space-between'}
                  my={5}
                  mx={2}
                >
                  <Typography variant='body2'>{tax.label}</Typography>
                  <CurrencyFormatCustom amount={tax.amount} showCurrencyName />
                </Stack>
              ))}

              <Divider />

              <Box
                display='flex'
                justifyContent='space-between'
                mt={2}
                mb={5}
                fontWeight='bold'
              >
                <Typography variant='h6'>Tổng tiền</Typography>
                <CurrencyFormatCustom amount={totalAmount} showCurrencyName />
              </Box>
              <Typography className='pb-10'>
                {convertCurrency(totalAmount, 'VND')}
              </Typography>

              <div className='flex justify-start space-x-10 pb-10'>
                <CoreButton
                  variant='contained'
                  color='secondary'
                  onClick={() => {
                    setOpenDialog(false)
                  }}
                >
                  Tiếp tục đặt món
                </CoreButton>
                <CoreButton
                  className='py-20'
                  variant='contained'
                  color='primary'
                  onClick={() => {
                    toggleDrawer(false)
                    onSubmit()
                  }}
                >
                  Xác nhận
                </CoreButton>
              </div>
            </div>
          </Drawer>
        )}
        {/* Desktop: Dialog */}
        <CoreDialog
          title='Thông tin đơn'
          open={openDialog}
          onClose={() => {
            setOpenDialog(false)
          }}
        >
          <DialogContent>
            <CheckoutDetail />
            <Divider />

            {taxesAndFees.map((tax) => (
              <Stack
                key={tax.label}
                direction={'row'}
                justifyContent={'space-between'}
                my={5}
              >
                <Typography variant='body2'>{tax.label}</Typography>
                <CurrencyFormatCustom amount={tax.amount} showCurrencyName />
              </Stack>
            ))}

            <Divider />

            <Box
              display='flex'
              justifyContent='space-between'
              mt={2}
              mb={5}
              fontWeight='bold'
            >
              <Typography variant='h6'>Tổng tiền</Typography>
              <CurrencyFormatCustom amount={totalAmount} showCurrencyName />
            </Box>
            <Typography>{convertCurrency(totalAmount, 'VND')}</Typography>
          </DialogContent>
          <DialogActions>
            <CoreButton
              variant='contained'
              color='secondary'
              onClick={() => {
                setOpenDialog(false)
              }}
            >
              Tiếp tục đặt món
            </CoreButton>
            <CoreButton
              variant='contained'
              color='primary'
              type='submit'
              loading={isLoadingSubmit}
            >
              Xác nhận
            </CoreButton>
          </DialogActions>
        </CoreDialog>
      </form>
    </FormProvider>
  )
}
