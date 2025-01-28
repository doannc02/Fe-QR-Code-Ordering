import { NoneLayout } from '@/components/layouts/WrapLayout/NoneLayout'
import { Meta } from '@/components/meta'
import Login from '@/components/templates/Login'
import { HttpResponse } from '@/lib/api'
import { combineGssp } from '@/lib/next/gssp/combineGssp'
import { checkLogin } from '@/lib/next/gssp/middleware/checkLogin'
import { NextPageWithLayout } from '@/lib/next/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

type Props = HttpResponse<null>

const Page: NextPageWithLayout<Props> = () => <Login />

Page.getLayout = NoneLayout
Page.getMeta = Meta(() => ({
  title: 'Đăng nhập hệ thống quản lý cv',
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
