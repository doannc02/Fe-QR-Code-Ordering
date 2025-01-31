import PageContainer from '@/components/organism/PageContainer'
import useTableList from './useTableList'
import { Grid, Tab, Typography } from '@mui/material'
import CoreInput from '@/components/atoms/CoreInput'
import { CoreTable } from '@/components/organism/CoreTable'
import { CoreBreadcrumbs } from '@/components/atoms/CoreBreadcrumbs'
import { Divide } from 'lucide-react'
import { CoreButton } from '@/components/atoms/CoreButton'
import { TopAction } from '@/components/molecules/TopAction'
import DotThree from '@/components/icons/DotThree'
import { MENU_URL } from '@/routes'

const TableList = () => {
  const [values, handles] = useTableList()

  const { columns, isLoading, router, tableData, methodForm } = values
  const { onChangePageSize, refetch } = handles

  const { control } = methodForm

  return (
    <PageContainer
      title={
        <CoreBreadcrumbs
          breadcrumbs={[
            {
              title: (
                <Typography sx={{ marginBottom: '5px' }}>
                  Danh sách bàn
                </Typography>
              ),
            },
          ]}
        />
      }
    >
      <form className='mx-5'>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <CoreInput
              control={control}
              name='search'
              label='Tìm kiếm theo vị trí'
              placeholder='Nhập vị trí bàn'
            />
          </Grid>
        </Grid>
        <div className='flex justify-center mt-15'>
          <div className='m-5'>
            <CoreButton onClick={() => {}} theme='reset'>
              Reset
            </CoreButton>
          </div>
          <div className='m-5'>
            <CoreButton theme='submit' type='submit'>
              Tìm kiếm
            </CoreButton>
          </div>
        </div>

        <div className='py-4 flex justify-end gap-4 items-center'>
          <TopAction actionList={['import', 'export']} />
          <DotThree className='mt-3' onClick={() => {}} />
          <CoreButton onClick={() => router.push(`${MENU_URL.TABLE}/addNew`)}>
            Thêm mới
          </CoreButton>
        </div>
        <CoreTable
          columns={columns}
          data={tableData}
          isLoading={isLoading}
          onChangePageSize={onChangePageSize}
          onRowClick={(id: number) => {
            router.push({
              pathname: `${MENU_URL.TABLE}/[id]`,
              query: { id, actionType: 'VIEW' },
            })
          }}
        />
      </form>
    </PageContainer>
  )
}

export default TableList
