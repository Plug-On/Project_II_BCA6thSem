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
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit sapiente asperiores voluptatibus dicta a mollitia voluptates vitae consequatur deserunt porro obcaecati, laudantium ea inventore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur cupiditate tenetur ex nostrum deserunt, explicabo nihil tempore dolorum quia eveniet. Architecto dicta molestias laudantium?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea libero expedita vero. Commodi perspiciatis adipisci harum quos deleniti voluptatum necessitatibus quo eaque alias? Quam, distinctio!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, assumenda quia doloribus aspernatur nam inventore nisi excepturi aliquam ipsam soluta est pariatur itaque dolorum illum!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas accusamus molestiae, ipsam, saepe possimus voluptas aut ducimus reiciendis inventore doloremque veritatis quo. Cupiditate nihil quo nulla libero, illo laudantium error!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ducimus odio accusantium ea labore repellendus eum earum soluta voluptatum consequuntur.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About