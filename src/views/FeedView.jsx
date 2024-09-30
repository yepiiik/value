import React, {useState} from 'react'

import ProductItem from "../components/product/ProductItem/ProductItem"

function FeedView() {
  const [productList, setProductList] = useState([
    {
      productName: 'Hoodie',
      productDescription: 'Made in journey to remember the beauty of the life',
      productPreviewURL: 'https://images.unsplash.com/photo-1583949493638-a9f5811a8837?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 100,
      currancy: 'USD',
      productViewCount: 53
    },
  ]);

  return (
    <div className="app">
      <h1>Unique products as you are</h1>

      <section className="product__section">
        {productList.map((productItem) => (
          <ProductItem {...productItem} />
        ))}
      </section>
      
    </div>
  )
}

export default FeedView