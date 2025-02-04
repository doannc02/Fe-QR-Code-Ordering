import LoadingPage from '@/components/atoms/LoadingPage'
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { ListItemOrder } from '../ListItemOrder'
import BannerMedia from './banner'
import useBanner from './useBanner'

const TabPanel: React.FC<any> = ({ value, index, children }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className='pt-10'
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
  const { onChangeTab, onSubmit, setCategoryId } = handles

  const categoryIdMapping = useMemo(() => {
    return dataCategory.map((tab) => tab.id)
  }, [dataCategory])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const selectedCategoryId = categoryIdMapping[newValue]
    onChangeTab(selectedCategoryId) // Cập nhật categoryId khi chuyển tab
    setValue(newValue) // Cập nhật chỉ số tab hiện tại
  }

  useEffect(() => {
    if (dataCategory?.length > 0) {
      setValue(dataCategory.findIndex((cat) => cat.id === dataCategory[0].id))
    }
  }, [dataCategory])

  return (
    <Grid
      container
      paddingTop={{
        xs: '0',
        md: '10px',
      }}
    >
      {isLoadingCategory ? (
        <div className='pt-20'>
          <LoadingPage />
        </div>
      ) : (
        <Grid item xs={12} sm={12}>
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
                  paddingTop: {
                    xs: '0px',
                    md: '0px',
                  },
                }}
                className='w-full'
              >
                <Box
                  sx={{
                    display: 'flex', // Để các tab hiển thị ngang
                    overflowX: 'auto', // Cho phép cuộn ngang khi có nhiều tab
                    paddingBottom: '10px', // Khoảng cách dưới cho các tab
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='dynamic tabs example'
                    sx={{
                      flexShrink: 0, // Đảm bảo các tab không bị thu nhỏ
                      '& .MuiTabs-scroller': {
                        overflowX: 'auto', // Thêm cuộn ngang vào Tab scroller
                      },
                    }}
                  >
                    {dataCategory.map((tab, index) => (
                      <Tab
                        key={tab.id}
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
                        {...a11yProps(index)} // a11yProps uses index
                      />
                    ))}
                  </Tabs>
                </Box>
              </Box>
              <Box
                sx={{
                  paddingTop: {
                    xs: '10px', // Padding top cho mobile
                    md: '10px', // Không padding cho desktop
                  },
                }}
              >
                <BannerMedia />

                <TabPanel value={value} index={value}>
                  <ListItemOrder
                    isLoading={
                      isFetching || isLoadingFoodItems || isLoadingCategory
                    }
                    items={dataFoodItems.filter(
                      (item) => item.categoryId === categoryId
                    )}
                  />
                </TabPanel>
              </Box>
            </div>
          </div>
        </Grid>
      )}
    </Grid>
  )
}

export default HomePage
