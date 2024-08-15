import React from 'react'
import Image from 'next/image'
import image1 from '@/public/pexels-matthew-montrone-230847-1324803.jpg';
import image2 from '@/public/pexels-brett-sayles-1682666.jpg';

export default function Body() {
  return (
    <div>
      <div className='flex justify-center px-36 gap-16 py-20'>
        <div className='flex flex-col gap-4'>
          <h1>Relax & Enjoy the Vacation</h1>
          <h1 className='text-3xl font-bold'>Choose Travelsy To Book Your Hotel</h1>
          <h1>Lorem ipsum dolor sit amet consectetur. Hac consequat hac arcu sed. Lectus ante ut in mattis ornare commodo nisi. Tortor tincidunt fames quam fusce convallis eget pulvinar.</h1>
          <button className="btn btn-secondary">Make reservations!</button>
        </div>
        <div className='flex text-center items-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet provident incidunt distinctio fuga iste dolorum reiciendis saepe pariatur maxime et perspiciatis, exercitationem temporibus, qui repellendus ab, doloribus earum vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, assumenda eveniet facilis mollitia, iure distinctio sint asperiores esse minus neque tempora beatae eius, debitis velit est adipisci voluptate ipsam. Cumque.
        </div>
      </div>
      
      <div className='bg-zinc-100 dark:bg-zinc-900 pt-5 pb-10'>
        <div className='text-center py-5'>
          <h2 className='italic'>Top Destination</h2>
          <h2 className='text-2xl font-bold'>Popular Villas for Booking</h2>
        </div>
        
        <div className='flex justify-center gap-3'>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure className="px-3 pt-3">
              <Image className='rounded-xl' src={image1} height={100} width={400} alt='view'></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='flex gap-3 py-2'>
                <div className='flex gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  <h3 className='text-sm'>Kintamani</h3>
                </div>
                <div className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                  <h3 className='text-sm'>2 person in night</h3>
                </div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-2xl'>$150/<span className='text-base'>night</span></h1>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            <Image className='rounded-xl' src={image1} height={100} width={400} alt='view'></Image>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='flex gap-3 py-2'>
                <div className='flex gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  <h3 className='text-sm'>Kintamani</h3>
                </div>
                <div className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                  <h3 className='text-sm'>2 person in night</h3>
                </div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-2xl'>$150/<span className='text-base'>night</span></h1>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure className="px-3 pt-3">
              <Image className='rounded-xl' src={image1} height={100} width={400} alt='view'></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='flex gap-3 py-2'>
                <div className='flex gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  <h3 className='text-sm'>Kintamani</h3>
                </div>
                <div className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                  <h3 className='text-sm'>2 person in night</h3>
                </div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-2xl'>$150/<span className='text-base'>night</span></h1>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col gap-4 px-36 py-10 text-center'>
        <h2 className='text-3xl font-bold'>Are You Ready To Travel With Us?</h2>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, tempore neque repellat architecto delectus illum voluptatum natus nam fugit cupiditate accusamus vero, quibusdam nemo modi esse sed ipsam. Blanditiis, libero.</h2>
        <div className='flex justify-center'>
          <button className='btn btn-accent w-auto'>See all</button>
        </div>
      </div>

      <div className='bg-base-300 px-36 py-10'>
        <div className='flex align-middle gap-36'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>From the Gallery</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
          </div>
          <div>
            <button className='btn btn-neutral rounded-none'>View all image</button>
          </div>
        </div>
        <div className='flex gap-3 justify-center mt-5'>
          <Image src={image1} height={100} width={256} alt='view'></Image>
          <Image src={image1} height={100} width={256} alt='view'></Image>
          <Image src={image1} height={100} width={256} alt='view'></Image>
          <Image src={image1} height={100} width={256} alt='view'></Image>
        </div>
        <div className='flex gap-3 justify-center mt-3'>
          <Image src={image1} height={100} width={256} alt='view'></Image>
          <Image src={image1} height={100} width={256} alt='view'></Image>
          <Image src={image1} height={100} width={256} alt='view'></Image>
          <Image src={image1} height={100} width={256} alt='view'></Image>
        </div>
      </div>   
    </div>
  )
}
