import React from 'react'
import { useParams } from 'react-router-dom';
import StorySection from '../components/product/ProductEditor/sections/StorySection/StorySection';

function ProductView() {
    const { productId } = useParams();

    return (
        <div>
            <span>ProductView {productId}</span>
            <StorySection />
        </div>
    )
}

export default ProductView