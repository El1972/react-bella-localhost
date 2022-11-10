import React from 'react'
import { useFiltersContext } from '../context/filters_context'
import { WomenSidebar } from './imports';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';



const Women = () => {

    let { women_filtered_items } = useFiltersContext();
    return (
        <div>

            <div className="main-header-wrapper">
                <div className="inner-main-header-wrapper">
                    <div className="header-container">
                        <h1 className='about-header'>Women's Shoes</h1>
                    </div>
                </div>
                <div className="sub-header-container">
                    <p className='sub-header-itself'>
                        Home<FaChevronDown className='chevron-right' />
                        Women's Shoes</p>
                </div>
            </div>

            <Hero />
            <div className="general-wrapper clearfix">
                <WomenSidebar />
                {
                    women_filtered_items.map((i, index) => {
                        const { id, images, bestsellers, names, prices } = i
                        return (
                            <div className='image-container' key={index}>
                                <div className='image-width' key={id}>
                                    <Link to={`product/${i.id}`}>
                                        <div className="image-float">
                                            <div className="image-properties">
                                                <div className='shoes-images'>
                                                    <div className="shoe-container">
                                                        <img src={`../../images/${images}`}
                                                            alt="" className='shoe-one' />
                                                    </div>
                                                    <div className="image-info-container">
                                                        <p className='image-bestsellers'>{bestsellers}</p>
                                                        <p className='image-names'>{names}</p>
                                                        <p className='image-prices'>${prices}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Women