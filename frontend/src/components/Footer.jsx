import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='felx flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-2 w-10 h-10' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 text-justify'>
            <b>PetZone</b> is your one-stop shop for high-quality pet products, offering everything your furry friends need to stay happy and healthy. From nutritious food to fun toys and accessories, we’re here to make pet parenting easier and more enjoyable!</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-2'>PETZONE</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
        <p className='text-xl font-medium mb-2'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>123-456-777</li>
          <li>contact@gmail.com</li>
        </ul>
        </div>

        </div>

        <div>
          <hr/>
          <p className='py-5 text-sm text-center'> Copyright 2025@ petzone.com - All Right Reserved. </p>
        </div>
    </div>
  )
}

export default Footer