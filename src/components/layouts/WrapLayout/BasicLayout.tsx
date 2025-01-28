import { DialogProvider } from '@/components/hooks/dialog/useDialog'
import { useAppSelector } from '@/redux/hook'
import { createTheme } from '@mui/material'
import getConfig from 'next/config'
import NextNProgress from 'nextjs-progressbar'
import { ReactElement, useEffect, useMemo } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot, useRecoilValue } from 'recoil'
import multipleLayout from '../MultipleLayouts'
import { layoutType } from '../MultipleLayouts/layoutTypeRecoil'
import ModeTheme from '../Theme'
import { getThemeConfig } from '../Theme/themeMUIConfig'
import { HubConnectionBuilder } from '@microsoft/signalr'
import { NotificationProvider } from '@/context/NotificationContext'
const {
  publicRuntimeConfig: { COMMON_URL },
} = getConfig()

const queryClient = new QueryClient()

export const BasicLayout = (page: ReactElement) => {
  const mainTheme = useAppSelector((state) => state.themeColorData)
  const fontConfig = useAppSelector((state) => state.fontData)

  const themeConfig = getThemeConfig(mainTheme, fontConfig)

  const theme = createTheme(themeConfig)

  return (
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ModeTheme theme={theme}>
            <Layout layouts={multipleLayout}>
              <NextNProgress
                color='red'
                height={4}
                options={{ showSpinner: true }}
              />
              <DialogProvider>{page}</DialogProvider>
            </Layout>
          </ModeTheme>
        </RecoilRoot>
      </QueryClientProvider>
    </NotificationProvider>
  )
}

const Layout = (props: any) => {
  const { layouts, children } = props
  const layoutRecoilValue = useRecoilValue(layoutType)

  const LayoutSwitch = useMemo(
    () => layouts[layoutRecoilValue],
    [layoutRecoilValue, layouts]
  )

  return <LayoutSwitch>{children}</LayoutSwitch>
}
