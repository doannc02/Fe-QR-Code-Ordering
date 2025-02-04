import CoreInput from '@/components/atoms/CoreInput'
import CoreSwitch from '@/components/atoms/CoreSwitch'
import { TopAction } from '@/components/molecules/TopAction'
import { errorMsg, successMsg } from '@/helper/message'
import { useFormCustom } from '@/lib/form'
import { MENU_URL } from '@/routes'
import {
  actionTable,
  useQueryGetDetailTable,
  useQueryGetListTable,
} from '@/service/table'
import { Table } from '@/service/table/type'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useFieldArray } from 'react-hook-form'
import { useMutation } from 'react-query'

const defaultValues = {
  data: [
    {
      id: null,
      tableNumber: '',
      isOccupied: false,
      qrCode: 'https://placehold.co/50x50',
    },
  ],
}

const useSaveTable = () => {
  const router = useRouter()
  const { actionType, id } = router.query

  const isUpdate = !!id

  console.log(isUpdate, id, router.query, 'router')

  const isView = actionType === 'VIEW'

  const methodForm = useFormCustom<{ data: Table[] }>({
    defaultValues,
  })

  const { control, reset, handleSubmit } = methodForm

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'data',
    keyName: 'key',
  })

  const { isLoading, data, refetch } = useQueryGetListTable()

  const columns = useMemo(() => {
    return [
      { header: 'Mã QR', fieldName: 'qrCode' },
      { header: 'Trạng thái', fieldName: 'isOccupied' },
      { header: 'Vị trí bàn', fieldName: 'tableNumber' },
      { header: '', fieldName: 'action' },
    ]
  }, [])

  const tableData = (fields ?? []).map((item, index) => {
    return {
      id: item.id,
      qrCode: (
        <Image
          key={item.key}
          alt={`${item.tableNumber ?? ''}`}
          width={50}
          height={50}
          src={
            item?.qrCode
              ? `data:image/png;base64,${item.qrCode}`
              : 'https://placehold.co/50x50'
          }
        />
      ),
      isOccupied: (
        <CoreSwitch
          key={item.key}
          control={control}
          name={`data.${index}.isOccupied`}
          label=''
        />
      ),
      tableNumber: item?.tableNumber ? (
        item?.tableNumber
      ) : (
        <CoreInput
          key={item.key}
          control={control}
          name={`data.${index}.tableNumber`}
          label=''
        />
      ),
      action: (
        <TopAction
          key={item.key}
          actionList={index > 0 ? ['remove', 'append'] : ['append']}
          onAppendAction={() =>
            append({
              id: null,
              isOccupied: false,
              qrCode: '',
            } as unknown as Table)
          }
          onRemoveAction={() => remove(index)}
        />
      ),
    }
  })

  const { mutate, isLoading: isLoadingSubmit } = useMutation(actionTable, {
    onSuccess: (res) => {
      if (res?.data?.isSuccess) {
        successMsg('Thành công')
        router.push({
          pathname: `${MENU_URL.TABLE}`,
        })
      }
    },
    onError: (err) => {
      errorMsg(err)
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    mutate({
      method: isUpdate ? 'put' : 'post',
      data: data.data,
    })
  })

  useEffect(() => {
    if (data?.data && isUpdate) {
      reset({ data: data?.data as unknown as Table[] })
    }
  }, [id, data?.data, reset, isUpdate])

  return [
    {
      methodForm,
      isLoading,
      actionType,
      isLoadingSubmit,
      isUpdate,
      isView,
      router,
      columns,
      tableData,
      id,
    },
    { onSubmit },
  ] as const
}

export default useSaveTable
