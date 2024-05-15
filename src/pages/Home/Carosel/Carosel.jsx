import './Carosel.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { Suspense, useEffect, useState } from "react";
import HorizontalLoader from '../../../common/loader/HorizontalLoader';
import makeRequest from '../../../../AxiosClient';
import InfinitiScrollLoader from '../../../common/infinitiScroll/InfinitiScrollLoader';
import { useQuery } from '@tanstack/react-query';
const CaroselImageList = React.lazy(() => import('./CaroselImageList'));


const Carosel = () => {

    const { isLoading, error, data: homeCarosel } = useQuery({
        queryKey: ['homeCarosel'],
        queryFn: async () => {
            const response = await makeRequest({ url: `/api/home/slider`, method: 'get' });
            return response.data;
        }
    })


    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderLength = homeCarosel?.length;

    const prevSlide = () => {
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    }
    const nextSlid = () => {
        setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
    }



    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(prevSlide, 5000);
        return () => clearInterval(intervalId);
    }, [currentSlide])

    return (
        <>
            {isLoading ? <HorizontalLoader /> : ''}
            {isLoading ? <InfinitiScrollLoader /> : ''}
            <div className="slider">
                <AiOutlineArrowLeft onClick={prevSlide} className="arrow prev" />
                <AiOutlineArrowRight onClick={nextSlid} className="arrow next" />

                {
                    homeCarosel?.length > 0 ?
                        homeCarosel?.map((slide, index) => {
                            const { image, title_one, title_two } = slide

                            return (

                                <Suspense key={index} fallback={<InfinitiScrollLoader />}>
                                    <CaroselImageList  index={index} currentSlide={currentSlide} image={image} title_one={title_one} title_two={title_two} />

                                </Suspense>
                            )
                        }) : ""
                }
            </div>




        </>
    );
};

export default Carosel;