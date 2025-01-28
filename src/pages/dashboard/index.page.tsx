import dynamic from 'next/dynamic'
import { BasicLayout } from '@/components/layouts/WrapLayout/BasicLayout'
import { Meta } from '@/components/meta'
import { HttpResponse } from '@/lib/api'
import { combineGssp } from '@/lib/next/gssp/combineGssp'
import { authGssp } from '@/lib/next/gssp/middleware/authGssp'
import { NextPageWithLayout } from '@/lib/next/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = HttpResponse<any>

// Import Dashboard with dynamic to disable SSR
const DashboardUser = dynamic(() => import('@/components/templates/Dashboard'), {
  ssr: false, // Disable SSR for Dashboard component
})

const Page: NextPageWithLayout<Props> = () => <DashboardUser />

Page.getLayout = BasicLayout
Page.getMeta = Meta(() => ({ title: 'Order food' }))

export const getServerSideProps = combineGssp<any>(
  // authGssp(),
  async ({ locale = 'vn' }) => ({
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  })
)

export default Page
