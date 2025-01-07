"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Product {
    imageProduct: ImageSlider
    titleProduct: string
}

interface ImageSlider {
    src: string;
    alt: string;
}

interface Props {
    titleSlider: string
    colorTitle: string
    classNameItem: string
    products: Product[]
}

const SliderProducts = ({
    titleSlider,
    colorTitle,
    classNameItem,
    products
}: Props) => {
    return (
        <section className={`${classNameItem} py-12`}>
            <div className="container mx-auto">
                <h2 className={`${colorTitle} text-2xl font-bold pb-4`}>{titleSlider}</h2>
                <div className="flex items-center justify-between slider-products mx-auto w-full">
                    <Swiper
                        slidesPerView={3}
                        className='flex w-full gap-2'
                        navigation
                        pagination={{clickable: true}}
                        spaceBetween={50}
                        modules={[Navigation]}
                    >
                        {
                            products.map((product: any, index: number) => (
                                <SwiperSlide 
                                    key={index}
                                    className="flex w-full justify-between border-2 border-[#E0E0E0] rounded-2xl p-4 bg-white"
                                >
                                    <Link
                                        href={"/"}
                                    >
                                        <h3 className="text-base text-black font-bold pb-3">{product.titleProduct}</h3>
                                        <Image 
                                            src={product.imageProduct.src}
                                            alt={product.imageProduct.alt}
                                            className='w-full'
                                            width={264}
                                            height={19}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default SliderProducts;