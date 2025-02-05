import { BasicLayout } from '@/components/layouts/WrapLayout/BasicLayout'
import { Meta } from '@/components/meta'
import { DashboardSkeleton } from '@/components/templates/Customer/Dashboard/components/Loadings/dashboardSkeleton'
import { HttpResponse } from '@/lib/api'
import { combineGssp } from '@/lib/next/gssp/combineGssp'
import { NextPageWithLayout } from '@/lib/next/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

type Props = HttpResponse<any>

const DashboardUser = dynamic(
  () => import('@/components/templates/Customer/Dashboard'),
  {
    ssr: true,
    loading: () => <DashboardSkeleton />,
  }
)

const Page: NextPageWithLayout<Props> = () => <DashboardUser />

Page.getLayout = BasicLayout
Page.getMeta = Meta(() => ({ title: 'Order food' }))

export const getServerSideProps = combineGssp<any>(
  async ({ locale = 'vn' }) => ({
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  })
)

export default Page
