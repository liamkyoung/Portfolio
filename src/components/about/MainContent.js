import React, { useState } from 'react'
import Headshot from '../Headshot'
import Timer from '../about/Timer'
import SocialButtons from '../footer/SocialButtons'
import ExpandIcon from '@mui/icons-material/ExpandMore'
import ShrinkIcon from '@mui/icons-material/ExpandLess'
import LeftFooter from '../footer/LeftFooter'
import ContactForm from '../contact/ContactForm'

function MainContent () {
  const [opened, setOpened] = useState(false)

  return (
    <div className='bg-portfolio p-6 rounded-xl mx-5 border-2 border-white'>
      <div className='flex justify-center relative z-200 mb-16'>
        <h1 className='font-notable text-5xl'>ABOUT ME</h1>
      </div>
      <div className='flex flex-col lg:flex-row mx-auto my-0 font-secular text-left'>
        <div className='px-8'>
          <Headshot />
          <div className='pt-5'>
            <Timer />
            <div className='mt-5 mb-5 border-t-2 border-b-2 px-8 py-8 text-lg text-center'>
              <h1>I&apos;m an eager and down-to-earth developer ready to pounce on exciting opprotunities!</h1><br />
              <div className='bg-portfolio-yellow text-portfolio rounded-sm p-2'>
                <div>
                  <h1 className=''>Send me a message if you&apos;d like to connect.</h1>  
                  {!opened && <ExpandIcon className='cursor-pointer' onClick={() => setOpened(!opened)}/> }
                  {opened && <ShrinkIcon className='cursor-pointer' onClick={() => setOpened(!opened)} />}
                  {opened && 
                  <div className='w-max'>
                    <ContactForm />
                  </div>  
                  }
                </div>
              </div>
            </div>
          </div>
          <SocialButtons />
        </div>
       
      </div>
    </div>
  )
}

export default MainContent
