import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';;
function ProductSlider({product}:any) {
  return (
    <div className="md:w-1/2 w-full">
              <div className="rounded-lg">
                <Carousel showIndicators={true} showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
                  <div>
                    <Image src={product?.image?.[0]} width={400} height={400} alt="Product Image" />
                  </div>
                  <div>
                    <Image src={product?.image?.[1]} width={400} height={400} alt="Product Image" />
                  </div>
                  <div>
                    <Image src={product?.image?.[2]} width={400} height={400} alt="Product Image" />
                  </div>
                </Carousel>
              </div>

              <section className='flex justify-between mt-3 gap-2'>
               
                {
                  product?.image?.map((img:any,i:any)=>{
                    return(
                      <div className='border rounded-lg p-2 shadow hover:border-5  hover:border-[#1941e1]'>
                       
                      <Image src={img} width={70} height={70} alt="Product Image" />
                      </div>
                    )
                  })
                }
              </section>

            </div>
  )
}

export default ProductSlider