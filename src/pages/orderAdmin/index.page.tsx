import { BasicLayout } from '@/components/layouts/WrapLayout/BasicLayout'
import { Meta } from '@/components/meta'
import AdminOrder from '@/components/templates/Admin/AdminManager'
import { HttpResponse } from '@/lib/api'
import { combineGssp } from '@/lib/next/gssp/combineGssp'
import { checkLogin } from '@/lib/next/gssp/middleware/checkLogin'
import { NextPageWithLayout } from '@/lib/next/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = HttpResponse<null>

const Page: NextPageWithLayout<Props> = () => <AdminOrder />

Page.getLayout = BasicLayout
Page.getMeta = Meta(() => ({
  title: 'Quản lý đơn đặt hàng',
  headNode: (
    <>
      <meta name='keywords' content='quản lý cv' />
      <meta
        name='description'
        content='Hệ thống quản lý CV, nơi giúp bạn tạo và duyệt cvv một cách dễ dàng.'
      />
      <meta name='mota' content='quản lý cv' />
      <meta name='author' content='doannc' />
    </>
  ),
}))

export const getServerSideProps = combineGssp<any>(
  checkLogin(),
  async ({ locale = 'vn' }) => ({
    props: {
      ...(await serverSideTranslations(locale, ['common', 'login'])),
    },
  })
)

export default Page
