import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box } from '@mui/material'
import Image from 'next/image'

// Mảng chứa thông tin các ảnh
const images = [
  {
    src: 'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/black-bar-be-cue-food-banner-template-9ffhfd5e8ddb36.webp',
    alt: 'Image 1',
  },
  {
    src: 'https://static.vecteezy.com/system/resources/previews/036/804/355/non_2x/ai-generated-assorted-indian-food-on-dark-wooden-background-free-photo.jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://marketplace.canva.com/EAGFv9wbcDA/1/0/1600w/canva-orange-and-white-modern-asian-food-restaurant-outdoor-banner-kediZUS4TYY.jpg',
    alt: 'Image 3',
  },
  {
    src: 'https://d3design.vn/uploads/Anh_Bia_Food_menu_web_banner_social_media_banner_template_Free_Psd.jpg',
    alt: 'Image 4',
  },
]

const SmoothCarousel = () => {
  return (
    <Box className='max-w-full mx-auto px-4'>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={1000}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        useKeyboardArrows={true}
        dynamicHeight={false} // Đặt thành false để tránh thay đổi chiều cao động
      >
        {images.map((image, index) => (
          <div key={index} className='rounded-lg overflow-hidden'>
            <Box className='h-80 md:h-180 flex items-center justify-center relative'>
              <Image
                width={1000}
                height={500} // Đặt chiều cao cố định cho hình ảnh
                src={image.src}
                alt={image.alt}
                layout='responsive'
                className='rounded-lg'
                style={{ objectFit: 'cover' }} // Sử dụng objectFit để đảm bảo hình ảnh bao phủ toàn bộ khung
              />
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  )
}

export default SmoothCarousel
