import Faq from '@/components/Faq'
import React from 'react'

import { Cinzel } from 'next/font/google'

const cinzel = Cinzel(
{  subsets: ['latin'],
  weight: ["400", "500", "600", "700"]}
);
const page = () => {
  return (
    <div className='min-h-screen  bg-no-repeat bg-cover bg-[url(/assets/faq/bgSmall.png)] md:bg-[url(/assets/faq/bg.png)]'>
      <div className={`${cinzel.className} text-white text-4xl font-semibold text-center pt-12`}>
        FAQs
      </div>
      <Faq/>
    </div>
    

  )
}

export default page
