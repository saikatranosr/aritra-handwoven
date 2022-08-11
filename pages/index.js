import { IKImage } from "imagekitio-react"
import Head from "next/head"
import ProductItem from "../components/ProductItem"
import Products from "../models/Products"
import Link from "next/link"
import mongoose from "mongoose"

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Aritra Handwoven - Handwoven Fabric Supplyer</title>
        <meta
          name='description'
          content='We are an integrated fabric manufacturer “one stop destination” for all type of handspun handwoven fabric requirement from designing to sampling to mass production. After 10 years of weaving experience gradually ALOKE NANDI, start up his own handloom, handspun, handwoven fabric manufacturing firm by the name of “ARITRA HANDWOVEN” in the year 2004...'
        />
        <meta property='og:url' content={`${process.env.NEXT_PUBLIC_HOST}`} />
        <meta
          property='og:title'
          content='Aritra Handwoven - Handwoven Fabric Supplyer'
        />
        <meta
          property='og:description'
          content='We are an integrated fabric manufacturer “one stop destination” for all type of handspun handwoven fabric requirement from designing to sampling to mass production. After 10 years of weaving experience gradually ALOKE NANDI, start up his own handloom, handspun, handwoven fabric manufacturing firm by the name of “ARITRA HANDWOVEN” in the year 2004...'
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_HOST}/full-logo-sky-500.png`}
        />
        <meta property='og:type' content='website' />
      </Head>

      <div className='bg-slate-200 dark:bg-slate-800 md:rounded-md my-2 overflow-hidden mx-auto'>
        <div
          id='carousel'
          className='max-w-5xl mx-auto py-5 flex items-center justify-center flex-col md:justify-around md:flex-row-reverse'
        >
          <div
            id='imgBox'
            className='bg-slate-300 dark:bg-slate-700 rounded-lg p-1 w-80 relative'
          >
            <IKImage
              alt='fabric'
              path='ui/fabric_hero_image.jpg'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col py-1 justify-center items-center'>
            <div className='py-3 w-80 md:w-96'>
              <IKImage
                alt='Aritra Handwoven'
                className='object-cover rounded-md'
                path='ui/full-logo.png'
              />
            </div>
            <span className='md:text-lg font-bold text-sky-700 dark:text-sky-300 px-5'>
            The Premium Quality Handwoven Fabric Supplyer
            </span>
            <div className='text-slate-700 dark:text-slate-300 my-5 text-lg max-w-fit mx-auto px-5'>
          <span>
          We are an integrated fabric manufacturer “one stop destination” for all type of handspun handwoven fabric requirement from designing to sampling to mass production. After 10 years of weaving experience gradually ALOKE NANDI, start up his own handloom, handspun, handwoven fabric manufacturing firm by the name of “ARITRA HANDWOVEN” in the year 2004...
          </span>{" "}
          <Link href='/pages/about' passHref>
            <a className='text-sky-500 hover:underline'>Read More</a>
          </Link>
        </div>
          </div>
        </div>
        
      </div>
      <div className='w-full max-w-5xl mx-auto'>
        <h1 className='text-slate-700 dark:text-slate-300 text-4xl font-semibold my-4 px-2'>
          Featured Products
        </h1>
      </div>
      <div className='my-2 flex flex-wrap text-slate-600 mx-auto max-w-5xl justify-center justify-items-start gap-9'>
        {products.map((element) => {
          return <ProductItem key={Date.now() * Math.random()} {...element} />
        })}
      </div>
      <div className='flex justify-center items-center my-5'>
        <Link href='/products'>
          <a className='px-6 py-2.5 bg-sky-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out'>
            See All
          </a>
        </Link>
      </div>
    </>
  )
}

export async function getStaticProps() {
  if (!mongoose.connections[0].readyState)
    await mongoose.connect(process.env.MONGO_URI)
  const products = await Products.aggregate([
    { $sort: { createdAt: -1 } },
    { $limit: 5 },
  ])
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  }
}
