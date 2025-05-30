import React from 'react'

const Product = ({loading, allFood}) => {
  return (
    <>
      {loading ?
        <div className='flex justify-center '>
          <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
        </div>
        : 
        <>
        <div className='flex flex-wrap px-4 lg:px-10 mb-3 '>
          {allFood.map((item, index) => {
            const { image, label, dishType, cuisineType } = item.recipe
            return (
              <div className="p-2 md:w-1/4 w-full" key={index}>
                <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img className='rounded-lg w-full mb-2' src={image} alt="" />
                  <h2 className='text-xl text-black font-bold'>{label.substr(0, 25)}</h2>
                  {/* <h2 className='text-lg text-black'><span className="font-bold">Calories:</span> {calories}</h2> */}
                  <h2 className='text-lg text-black'><span className='font-bold'>DishType:</span> {dishType}</h2>
                  <h2 className='text-lg text-black mb-2'><span className='font-bold capitalize'>CuisineType:</span><span className='capatalize'> {cuisineType}</span></h2>
                  <div className=" flex  space-x-2 justify-between">
                    <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to cart</button>
                    <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        </>
        }
    </>
  )
}

export default Product
