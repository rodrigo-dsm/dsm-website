"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import bannerRobos from "@/public/images/banner_robos_industriais.png";
import bannerMetal from "@/public/images/banner_maquinas_metal.png"

const BannerMain = () => {

    return (
        <section className='bg-white'>
            <div className='banner-main container mx-auto'>
                <Swiper
                    slidesPerView={1}
                    className='flex'
                    navigation
                    pagination={{clickable: true}}
                >
                    <SwiperSlide>
                        <Link
                            href={"/"}
                        >
                            <Image 
                                src={bannerRobos}
                                alt='Banner Principal Robos'
                                className='w-full'
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link
                            href={"/"}
                        >
                            <Image 
                                src={bannerMetal}
                                alt='Banner Principal Metal'
                                className='w-full'
                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )

}

export default BannerMain;