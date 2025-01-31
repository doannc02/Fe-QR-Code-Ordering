import { PaginationTableProps } from '@/components/organism/CoreTable'
import { GREEN, ORANGE } from '@/helper/colors'
import { useFormCustom } from '@/lib/form'
import { useQueryGetListTable } from '@/service/table'
import { Typography } from '@mui/material'
import _ from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

const defaultValues = {
  page: 0,
  size: 20,
  search: '',
}

const useTableList = () => {
  const [queryPage, setQueryPage] = useState<any>(
    _.omitBy(defaultValues, _.isNil)
  )
  const methodForm = useFormCustom()

  const router = useRouter()

  const { isLoading, data, refetch } = useQueryGetListTable()

  const columns = useMemo(() => {
    return [
      { header: 'Mã QR', fieldName: 'qrCode' },
      { header: 'Trạng thái', fieldName: 'isOccupied' },
      { header: 'Vị trí bàn', fieldName: 'tableNumber' },
    ]
  }, [])

  const tableData = (data?.data ?? []).map((item) => {
    return {
      id: item.id,
      qrCode: (
        <Image
          alt='test qr'
          width={50}
          height={50}
          src={
            item?.qrCode
              ? `data:image/png;base64,${item.qrCode}`
              : 'https://via.placeholder.com/500x500?text=No+Image'
          }
        />
      ),
      isOccupied: <DisplayTextOccupied isOccupied={item?.isOccupied} />,
      tableNumber: item?.tableNumber,
    }
  })

  const onChangePageSize = (val: PaginationTableProps) => {
    const { page, size } = val
    const input = { ...queryPage, page, size }
    setQueryPage(input)
  }

  return [
    { columns, tableData, isLoading, methodForm, router },
    { refetch, onChangePageSize },
  ] as const
}

export default useTableList

const DisplayTextOccupied = ({ isOccupied }: { isOccupied: boolean }) => {
  const colorText = isOccupied ? ORANGE : GREEN
  const label = isOccupied ? 'Đã có khách' : 'Trống'
  return <Typography color={colorText}>{label}</Typography>
}
