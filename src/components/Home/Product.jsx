const Product=({productIMG,productName,productDescription,productPrice,ProductAlt})=>{
  return(
<div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 border-2 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={productIMG} alt={ProductAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700"> 
               {productName}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{productDescription}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{productPrice}</p>
        </div>
      </div>
  )
}

export default Product;
