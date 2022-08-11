import { IKImage } from "imagekitio-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className='text-slate-700 dark:text-slate-300 body-font bg-white dark:bg-slate-800'>
      <div className='container px-5 py-10 mx-auto flex items-center sm:flex-row flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <div className='relative w-full h-10'>
            <IKImage className="object-cover" path='ui/full-logo.png' />
          </div>
          <p className='mt-2 text-sm text-slate-500'>
            The Best Quality Handmade Fabric Store and Fabric Manufacturer all
            over India
          </p>
        </div>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-slate-700 dark:text-slate-300 tracking-widest text-sm mb-3'>
              SHOP
            </h2>
            <nav className='list-none mb-10'>
              
              <li>
                <Link href={"/products"} passHref>
                  <a className='text-slate-500 hover:underline'>All Products</a>
                </Link>
              </li>
              
              
             
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-slate-700 dark:text-slate-300 tracking-widest text-sm mb-3'>
              CUSTOMER SERVICE
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <Link href={"/pages/about"} passHref>
                  <a className='text-slate-500 hover:underline'>About Us</a>
                </Link>
              </li>
              <li>
                <Link href={"/pages/contact"} passHref>
                  <a className='text-slate-500 hover:underline'>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href={"mailto:contact@aritrahandwoven.com"} passHref>
                  <a className='text-slate-500 hover:underline'>Email Us</a>
                </Link>
              </li>
              <li>
                <Link href={"tel:9734470782"} passHref>
                  <a className='text-slate-500 hover:underline'>Call Us</a>
                </Link>
              </li>
            </nav>
          </div>
          
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-slate-700 dark:text-slate-300 tracking-widest text-sm mb-3'>
              SOCIAL LINKS
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a target="_blank" rel="noreferrer" href="https://wa.me/918076385508" className='text-slate-500 hover:underline'>WhatsApp 8076385508</a>
                
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://instagram.com/instagram.com/nrweaves_/" className='text-slate-500 hover:underline'>Instagram @nrweaves_</a>
                
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://facebook.com/NR-Weaves-101757268814836" className='text-slate-500 hover:underline'>Facebook</a>
                
              </li>
              
            </nav>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-slate-500 text-sm text-center sm:text-left'>
            © 2022 Aritra Handwoven — All rights reserved | Design and Developed with ❤️ by <Link href="https://www.ranodevs.com" passHref><a className="text-sky-400 dark:text-sky-600 hover:underline">RanoDevs</a></Link>
          </p>
          {/* <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <a className='text-slate-500'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a className='ml-3 text-slate-500'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a className='ml-3 text-slate-500'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a className='ml-3 text-slate-500'>
              <svg
                fill='currentColor'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='0'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  )
}
