import React,{useState} from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';

function ProductSlider({product}:any) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);

  const handleOpenModal = (design: any) => {
    setSelectedDesign(design);
    setShowModal(true);
    
};

const handleCloseModal = () => {
    setSelectedDesign(null);
    setShowModal(false);
};
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
                  product?.image?.map((img:any,i:number)=>{
                    return(
                      <div key={i} className='border rounded-lg p-2 shadow hover:border-5  hover:border-[#1941e1]'>
                       
                      <Image onClick={() => handleOpenModal(img)} src={img} width={70} height={70} alt="Product Image" />
                     
                      </div>
                    )
                  })
                }
              </section>

              {showModal && selectedDesign && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50  ">
                    <div className="max-w-lg p-8 rounded-lg overflow-hidden animate__animated animate__zoomIn">
                        <div className='text-right mb-3'>
                            <button onClick={handleCloseModal} className="text-red-600 text-xl font-bold bg-white rounded-full px-2">&times;</button>
                        </div>
                        <Image src={selectedDesign} alt="" width={500} height={500} className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            )}

            </div>
  )
}

export default ProductSlider