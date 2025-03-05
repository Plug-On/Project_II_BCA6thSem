import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-4 md:w-2/4 text-gray-600'>
            <p className='text-justify'>Welcome to <b>PetZone</b>, your ultimate destination for all things pets! We are dedicated to providing high-quality products that keep your furry, feathered, and scaly friends happy and healthy. From nutritious food to fun toys and cozy accessories, we have everything your pet needs.<br/>  
            At <b>PetZone</b>, we believe pets are family. That's why we focus on quality, affordability, and convenience, ensuring a seamless shopping experience. Whether you're a proud pet parent or a new owner, we're here to support you with the best products and expert care tips. Shop with us and give your pets the love they deserve!</p>
            <b className='text-gray-800 font-bold text-xl'>Our Mission</b>
            <p className='text-justify'>At <b>PetZone</b>, our mission is to provide high-quality pet products that enhance the health, happiness, and well-being of your furry, feathered, and scaly companions. We believe that every pet deserves the best care, which is why we carefully select safe, nutritious, and fun products to support their needs. <br /> 
            Beyond products, we strive to create a community of pet lovers by offering expert advice, reliable customer support, and a seamless shopping experience. Our goal is to make pet parenting easier, more enjoyable, and filled with love—because pets are family, and they deserve the very best!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600 text-justify'> At <b>PetZone</b>, we are committed to offering only the best for your pets. Every product in our store is carefully selected to ensure high quality, durability, and safety. From nutritious food to fun toys and essential accessories, we prioritize products that enhance your pet's health and happiness.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600 text-justify'>We make pet shopping effortless with our easy-to-navigate website, secure payment options, and fast delivery service. Whether you're at home or on the go, you can browse, shop, and receive your pet's essentials with just a few clicks—saving you time and effort. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600 text-justify'>Your satisfaction is our priority! Our dedicated support team is always ready to assist with expert advice, personalized recommendations, and quick resolutions to any queries. We're here to ensure you and your pet have the best shopping experience possible.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About