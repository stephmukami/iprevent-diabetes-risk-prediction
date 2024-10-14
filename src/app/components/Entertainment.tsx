import React from 'react'

type Props = object

function Entertainment({}: Props) {
  return (
    <>
    <div className="min-h-screen min-w-screen">
        
        <div className="flex image-container justify-center items-center border border-red-500 p-[20px] pt-[30px]">
          <img className=' w-[319px] h-[336px] border border-red-300' src="./Champagne.png" alt=" 3d image of a champagne bottle" />
 
        </div>

        <div className=" text-container p-[20px] bg-black text-white  w-screen  border border-red-300  ">
            <h3 className='text-2xl mb-4'>
              Continued Explainer 
            </h3>
            <p className='mb-6'>Mauris semper nisl et sagittis mattis  Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet iaculis</p>
            
            <div className="smoking-div mb-6 flex space-x-6 items-center border border-red-300">
              <div className="flex items-center">
                <h5 >4. Smoking frequently Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
              </div>
              <div className="binary-buttons flex space-x-4 items-center">
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">Yes</button>
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">No</button>
              </div>
            </div>
            <h5 className='mb-4'>5. Alcohol consumption  Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet  (0-20)
            </h5>
              <div className="range flex space-x-4 p-3">
                <div>
                  <label htmlFor="range">Range</label>
                </div>
                <div className="mb-[60px] w-[200px]">
                  <input className="bg-white w-[90px] rounded-sm h-[22px]" type="email" />
                </div>
              </div>
            <div className="flex items-center justify-center ">
              <div className="nav-buttons flex justify-between pl-3 w-[650px] ">
                <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
                <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md">Next</button>
              </div>
            </div>

</div>

    </div>
    </>
  )
}

export default Entertainment