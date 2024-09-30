import React from 'react'
import style from './ProductItem.module.css'

function ProductItem({productName, productDescription, productPreviewURL, price, currancy, productViewCount}) {
  return (
    <div className={style.ProductItem}>
        <img className={style.ProductPreviewPicture} src={productPreviewURL} alt={productName} />
        <h2>{productName}</h2>
        <span className={style.ProductViewCount}>{productViewCount}</span>
        {/* <p>{productDescription}</p> */}
        {/* <span>{price} {currancy}</span> */}
    </div>
  )
}

export default ProductItem