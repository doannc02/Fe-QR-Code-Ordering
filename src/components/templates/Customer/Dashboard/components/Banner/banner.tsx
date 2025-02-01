import React from 'react'
import Slider from 'react-slick'
import { Box } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
  const settings = {
    dots: true, // Hiển thị dots điều hướng
    infinite: true, // Lặp lại carousel
    speed: 1000, // Thời gian chuyển slide
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 3000, // Tự động sau 3 giây
    slidesToShow: 1, // Hiển thị 1 slide trên các màn hình nhỏ
    slidesToScroll: 1, // Chuyển 1 slide mỗi lần
    fade: true, // Chuyển slide mượt mà
    prevArrow: <button className='slick-prev'>{'<'}</button>, // Mũi tên trước
    nextArrow: <button className='slick-next'>{'>'}</button>, // Mũi tên tiếp theo
    responsive: [
      {
        breakpoint: 640, // Màn hình nhỏ
        settings: {
          slidesToShow: 1, // Hiển thị 1 slide trên màn hình nhỏ
          slidesToScroll: 1, // Chuyển 1 slide mỗi lần
          prevArrow: null, // Không hiển thị mũi tên trên mobile
          nextArrow: null, // Không hiển thị mũi tên trên mobile
        },
      },
      {
        breakpoint: 1024, // Màn hình lớn (desktop)
        settings: {
          slidesToShow: 1, // Hiển thị 1 slide trên màn hình lớn
          slidesToScroll: 1, // Chuyển 1 slide mỗi lần
          prevArrow: <button className='slick-prev'>{'<'}</button>, // Mũi tên trước
          nextArrow: <button className='slick-next'>{'>'}</button>, // Mũi tên tiếp theo
        },
      },
    ],
  } as any

  return (
    <Box className='max-w-full mx-auto px-4'>
      <style jsx global>{`
        .slick-prev,
        .slick-next {
          z-index: 1;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .slick-prev:hover,
        .slick-next:hover {
          background-color: rgba(255, 255, 255, 1);
        }

        .slick-prev {
          left: 20px;
        }

        .slick-next {
          right: 20px;
        }

        .slick-dots {
          bottom: 20px;
        }

        .slick-dots li button:before {
          color: white;
          opacity: 0.5;
          font-size: 12px;
        }

        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }

        .slick-slide div {
          outline: none;
        }

        .slick-slide img {
          transition: transform 0.5s ease;
        }

        .slick-slide:hover img {
          transform: scale(1.1);
        }
      `}</style>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='rounded-lg overflow-hidden'>
            <Box className='h-80 md:h-180 flex items-center justify-center relative'>
              <Image
                width={1000}
                height={200}
                src={image.src}
                alt={image.alt}
                layout='responsive'
                className='rounded-lg'
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  )
}

export default SmoothCarousel
