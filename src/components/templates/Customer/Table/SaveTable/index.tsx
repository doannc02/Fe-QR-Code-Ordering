import { CoreBreadcrumbs } from '@/components/atoms/CoreBreadcrumbs'
import { CoreButton } from '@/components/atoms/CoreButton'
import CoreInput from '@/components/atoms/CoreInput'
import CoreSwitch from '@/components/atoms/CoreSwitch'
import { TopAction } from '@/components/molecules/TopAction'
import CoreNavbar from '@/components/organism/CoreNavbar'
import PageContainer from '@/components/organism/PageContainer'
import { MENU_URL } from '@/routes'
import { Grid } from '@mui/material'
import Image from 'next/image'
import useSaveTable from './useSaveTable'
import CoreLoading from '@/components/molecules/CoreLoading'
import { CoreTable } from '@/components/organism/CoreTable'

const SaveTable = () => {
  const [
    {
      isLoading,
      actionType,
      isLoadingSubmit,
      isUpdate,
      isView,
      methodForm,
      router,
      id,
      columns,
      tableData,
    },
    { onSubmit },
  ] = useSaveTable()

  const { control, getValues } = methodForm

  return (
    <PageContainer
      title={
        <div className='flex justify-between items-center'>
          <CoreBreadcrumbs
            breadcrumbs={[
              {
                title: 'Danh sách bàn',
                pathname: MENU_URL.TABLE.LIST,
              },
              {
                title: isUpdate ? 'Chỉnh sửa ' : 'Thêm mới bàn',
              },
            ]}
          />
        </div>
      }
    >
      {isLoading ? (
        <CoreLoading />
      ) : (
        <CoreNavbar
          breadcrumbs={[
            {
              title: 'Chi tiết',
              rightAction: (
                <TopAction
                  actionList={isView ? ['edit', 'delete'] : ['delete']}
                  onEditAction={() => {
                    router.replace({
                      pathname: `${MENU_URL.TABLE}`,
                      query: {
                        actionType: '',
                      },
                    })
                  }}
                />
              ),
              content: (
                <form
                  className='block my-15 rounded-xl mx-5 h-[150px]'
                  onSubmit={onSubmit}
                >
                  <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                      <CoreTable
                        columns={columns}
                        data={tableData}
                        paginationHidden
                      />
                    </Grid>
                  </Grid>

                  {actionType !== 'VIEW' && (
                    <div className='space-x-12 text-center mt-10'>
                      <CoreButton theme='cancel' onClick={() => router.back()}>
                        Hủy
                      </CoreButton>
                      <CoreButton
                        theme='submit'
                        type='submit'
                        loading={isLoadingSubmit}
                      >
                        {isUpdate ? 'Lưu thay đổi' : 'Thêm mới'}
                      </CoreButton>
                    </div>
                  )}
                </form>
              ),
            },
          ]}
        />
      )}
    </PageContainer>
  )
}

export default SaveTable
