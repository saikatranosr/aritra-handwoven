import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products}) {
    
    return (
        <div className="flex flex-wrap text-slate-600 mx-auto container border border-red-100 justify-center justify-items-start gap-5">
            { products.map((element)=>{
                return <ProductItem key={element.id} {...element}/>
            }) }
        </div>
    )
}

export default ProductList
