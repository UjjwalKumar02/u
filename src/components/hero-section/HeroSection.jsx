import React, {useState} from 'react';
import pfp from '/public/pfp.jpg'
import location from '/public/location.svg'
import mail from '/public/mail.svg'
import {motion} from 'framer-motion'

// text-gray-800 border border-gray-400
const HeroSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='bg-[#171717] sm:w-[60%] w-[85%] sm:p-9 p-5 mx-auto  sm:text-[1.25rem] text-[1rem] text-gray-300  rounded-lg border border-gray-900 shadow-lg'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      amount:0.1, 
      once:false,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
      <div className='w-full flex gap-6'>
        <img src={pfp} alt="pfp" className='sm:w-29 sm:h-29 w-23 h-23 rounded-lg' />

        <div className='w-full'>
          <div className='w-full flex sm:flex-row flex-col gap-3 justify-between'>
            <div>
              <p className='sm:block hidden font-semibold sm:text-[1.5rem] text-[1.25rem] text-[#e5e5e5]'>
                Ujjwal Kumar
              </p>
              <p className='sm:hidden block font-semibold text-[1.25rem] text-[#e5e5e5]'>
                Ujjwal
              </p>
              <p className='sm:hidden block font-semibold text-[1.25rem] text-[#e5e5e5]'>
                Kumar
              </p>
              <p className='text-[#e76231]'>ML Engineer</p>
            </div>

            <div className='sm:flex hidden gap-[0.6rem] h-fit'>
              <a href="https://github.com/ujjwalkumar02">
                <svg height="25" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="25" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z " fill='#e5e5e5'></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" id="linkedin-bug-blue-xsmall" aria-hidden="true" role="none" data-supported-dps="21x21" width="24" height="24" focusable="false" className="windows-app-upsell__linkedin-bug-icon-svg lazy-loaded" aria-busy="false">
                  <g>
                    <path d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25A1.75 1.75 0 116.25 4.5 1.75 1.75 0 014.5 6.25zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.32 2.32 0 0011 12.91V18H8V8h3v1.39a4 4 0 013.3-1.63c1.77 0 3.66.93 3.66 4z" fill="#e5e5e5"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className='mt-4 sm:block hidden'>
            <span className='flex gap-[1px] items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 24 24" width="19" fill="oklch(0.872 0.01 258.338)">
  <path d="M12 2C8.13 2 5 5.13 5 8.5c0 4.67 7 12.5 7 12.5s7-7.83 7-12.5c0-3.37-3.13-6.5-7-6.5zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7.5 12 7.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
</svg>

              Delhi, India
            </span>
            <span className='flex gap-[3px] items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              kumarujjwaldos@gmail.com
            </span>
          </div>
        </div>

      </div>


      <div className='sm:hidden flex gap-2 h-fit mt-8'>
        <a href="https://github.com/ujjwalkumar02">
          <svg height="24" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
            <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z " fill='#e5e5e5'></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" id="linkedin-bug-blue-xsmall" aria-hidden="true" role="none" data-supported-dps="21x21" width="23" height="23" focusable="false" className="windows-app-upsell__linkedin-bug-icon-svg lazy-loaded" aria-busy="false">
            <g>
              <path d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25A1.75 1.75 0 116.25 4.5 1.75 1.75 0 014.5 6.25zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.32 2.32 0 0011 12.91V18H8V8h3v1.39a4 4 0 013.3-1.63c1.77 0 3.66.93 3.66 4z" fill="#e5e5e5"></path>
            </g>
          </svg>
        </a>
      </div>


      <div className='mt-4 sm:hidden block'>
        <span className='flex gap-[1px] items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 24 24" width="19" fill="oklch(0.872 0.01 258.338)">
  <path d="M12 2C8.13 2 5 5.13 5 8.5c0 4.67 7 12.5 7 12.5s7-7.83 7-12.5c0-3.37-3.13-6.5-7-6.5zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7.5 12 7.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
</svg>
        Delhi, India
        </span>
        <span className='flex gap-[3px] items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          kumarujjwaldos@gmail.com
        </span>
      </div>


      <div className='mt-4'>
        <p>
        Trying to learn new things.
        </p>
      </div>
    </motion.section>
  )
}

export default HeroSection