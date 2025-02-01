import DefaultImageApp from '@/assets/png/customer.png'
import SquaresFour from '@/components/icons/SquaresFour'
import { BLACK, ORANGE, WHITE } from '@/helper/colors'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Menu, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const listWebApps = [
  {
    homepage: 'http://itf.viu.edu.vn/',
    imageUrl: '',
    name: 'ITF',
    code: 'ITF VIU',
  },
  {
    homepage: 'http://itf.viu.edu.vn/admin',
    imageUrl: '',
    name: 'ADMIN',
    code: 'ADMIN',
  },
]

export const SwitchSystem = () => {
  const [anchorEl, setAnchorEl] = React.useState<any>(null)

  return (
    <div className='h-full w-full relative '>
      <div
        className='relative h-full flex items-center gap-10 cursor-pointer'
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <div className='flex my-2 flex-col justify-around gap-3 items-start pl-7'>
          <Image
            style={{ border: '1px solid', borderRadius: '990px', zIndex: 21 }}
            width={60}
            height={60}
            alt='logo-dev-job'
            src={require('static/images.ico')}
          />

          <Typography
            variant='body2'
            className='font-bold'
            style={{ color: WHITE }}
          >
            Ăn là sẽ nhớ - nhớ rồi sẽ tới ăn
          </Typography>

          <div
            className='absolute'
            style={{
              width: '100px',
              height: '100%',
              left: '180px',
              backgroundColor: ORANGE,
              clipPath:
                'polygon(41% 0, 68% 48%, 41% 100%, 13% 100%, 41% 48%, 15% 0)',
              transition: 'all 0.3s ease',
            }}
          />
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{
          root: 'w-130 h-screen bg-white',
        }}
        TransitionProps={{
          style: {
            boxShadow: 'none',
            margin: 0,
            padding: 0,
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          },
        }}
        MenuListProps={{
          style: {
            padding: 0,
          },
        }}
      >
        <div className='h-full w-full'>
          <div className='flex items-center gap-2'>
            <SquaresFour onClick={() => setAnchorEl(null)} />
            <Typography variant='subtitle1'>Khoa CNTT</Typography>
          </div>

          <div className='flex items-center mt-10 ml-4'>
            <Typography variant='body1' style={{ fontWeight: 600 }}>
              WebApps
            </Typography>
          </div>

          <div className='grid grid-cols-2 px-4 mt-10'>
            {listWebApps.map((system: any, index) => {
              return (
                <Link
                  key={index}
                  href={`${system.homepage}`}
                  target='_blank'
                  rel='noopener'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <div className='flex items-center cursor-pointer gap-3 mt-10 group'>
                    <div className='flex items-center'>
                      <Image
                        width={16}
                        height={16}
                        src={
                          system.imageUrl && system.imageUrl.includes('http')
                            ? system.imageUrl
                            : DefaultImageApp
                        }
                        alt={system?.name}
                      />
                    </div>

                    <Typography
                      variant='body1'
                      className='group-hover:text-[#0078D4]'
                    >
                      {system.name}
                    </Typography>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className='w-full mt-10 group cursor-pointer ml-4'>
            <div className='flex items-center gap-1 mt-10  group-hover:text-[#0078D4] '>
              <Typography
                variant='body2'
                className='group-hover:text-[#0078D4]'
              >
                Tất cả module
              </Typography>

              <ArrowBackIcon
                sx={{ transform: 'rotate(180deg)', fontSize: 15 }}
              />
            </div>
          </div>
        </div>
      </Menu>
    </div>
  )
}
