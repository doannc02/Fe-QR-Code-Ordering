import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Grid, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import SwipeableViews from 'react-swipeable-views'
import LoadingPage from '@/components/atoms/LoadingPage'
import useBanner from './useBanner'
import { BannerSkeleton } from '../Loadings/bannerSkeleton'
import { OrderItemOrderLoading } from '../Loadings/listFoodItemSkeleton'

// Lazy load components
const ListItemOrder = React.lazy(
  () =>
    import('@/components/templates/Customer/Dashboard/components/ListItemOrder')
)
const BannerMedia = React.lazy(() => import('./banner'))

const TabPanel: React.FC<any> = ({ value, index, children }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className='pt-10 xs:pt-5'
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const HomePage: React.FC = () => {
  const [value, setValue] = useState<number>(0)
  const [values, handles] = useBanner()
  const {
    dataCategory,
    dataFoodItems,
    isLoadingCategory,
    isLoadingFoodItems,
    isFetching,
    categoryId,
  } = values
  const { onChangeTab, setCategoryId } = handles

  const categoryIdMapping = useMemo(
    () => dataCategory.map((tab) => tab.id),
    [dataCategory]
  )

  const tabRefs = useRef<(HTMLElement | null)[]>([])

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    const selectedCategoryId = categoryIdMapping[newValue]
    onChangeTab(selectedCategoryId)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
    const selectedCategoryId = categoryIdMapping[index]
    onChangeTab(selectedCategoryId)
  }

  useEffect(() => {
    if (tabRefs.current[value]) {
      tabRefs.current[value]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [value])

  useEffect(() => {
    if (dataCategory?.length > 0) {
      setValue(dataCategory.findIndex((cat) => cat.id === dataCategory[0].id))
    }
  }, [dataCategory])

  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <Grid container paddingTop={{ xs: '0', md: '10px' }}>
      {isLoadingCategory ? (
        <div className='pt-20'>
          <LoadingPage />
        </div>
      ) : (
        <Grid item xs={12}>
          <div className='flex w-full justify-center items-center'>
            <div className='rounded-sm w-full'>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  position: 'sticky',
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  backgroundColor: 'white',
                  boxShadow: 1,
                }}
                className='w-full'
              >
                <Box
                  sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    paddingBottom: '10px',
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChangeTab}
                    aria-label='dynamic tabs example'
                    variant='scrollable'
                    scrollButtons='auto'
                    sx={{
                      flexShrink: 0,
                      '& .MuiTabs-scroller': { overflowX: 'auto' },
                    }}
                  >
                    {dataCategory.map((tab, index) => (
                      <Tab
                        key={tab.id}
                        ref={(el) => {
                          tabRefs.current[index] = el
                        }}
                        label={
                          <Typography
                            sx={{
                              fontWeight: 'bold',
                              textTransform: 'none',
                            }}
                            style={{ fontSize: '11px' }}
                          >
                            {tab.name}
                          </Typography>
                        }
                        {...a11yProps(index)}
                      />
                    ))}
                  </Tabs>
                </Box>
              </Box>
              <Box sx={{ paddingTop: { xs: '10px', md: '10px' } }}>
                <Suspense fallback={<BannerSkeleton />}>
                  <BannerMedia />
                </Suspense>

                {isMobile ? (
                  <SwipeableViews
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                    {dataCategory.map((tab, index) => (
                      <TabPanel key={tab.id} value={value} index={index}>
                        <Suspense fallback={<OrderItemOrderLoading />}>
                          <ListItemOrder
                            isLoading={
                              isFetching ||
                              isLoadingFoodItems ||
                              isLoadingCategory
                            }
                            items={dataFoodItems.filter(
                              (item) => item.categoryId === tab.id
                            )}
                          />
                        </Suspense>
                      </TabPanel>
                    ))}
                  </SwipeableViews>
                ) : (
                  dataCategory.map((tab, index) => (
                    <TabPanel key={tab.id} value={value} index={index}>
                      <Suspense fallback={<OrderItemOrderLoading />}>
                        <ListItemOrder
                          isLoading={
                            isFetching ||
                            isLoadingFoodItems ||
                            isLoadingCategory
                          }
                          items={dataFoodItems.filter(
                            (item) => item.categoryId === tab.id
                          )}
                        />
                      </Suspense>
                    </TabPanel>
                  ))
                )}
              </Box>
            </div>
          </div>
        </Grid>
      )}
    </Grid>
  )
}

export default HomePage
