import { useRouter } from "next/router"
import Link from "next/link"
import { useState } from "react"
import Products from "../../models/Products"
import mongoose from "mongoose"
import Head from "next/head"
import Modal from "../../components/Modal"
import { IKImage } from "imagekitio-react"
import Icon from "../../components/Icon"

function Product({ product }) {
  const [zoom, setZoom] = useState(false)

  const router = useRouter()
  const {id} = router.query

  const { title, imageURL, _id, details } = product

  const handleOrderNow = () => {
    window.open(`https://wa.me/918076385508?text=%2AOrder through Web%2A%0AProduct: ${process.env.NEXT_PUBLIC_HOST}/product/${id}%0A`, "_blank")
  }

  return (
    <>
      <Head>
        <title>{title} - Aritra Handwoven</title>
        <meta
          name='description'
          content={`Length: ${
            details.length
          } mitres, Width: ${details.width}; Count: ${details.count}.`}
        />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_HOST}/product/${_id}`}
        />
        <meta property='og:title' content={`${title} - Aritra Handwoven`} />
        <meta
          property='og:description'
          content={`Length: ${
            details.length
          } mitres, Width: ${details.width}; Count: ${details.count}.`}
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/${imageURL}`}
        />
        <meta property='og:type' content='website' />
      </Head>
      <div className='main min-h-screen md:h-screen flex flex-col md:flex-row gap-2 py-2'>
        {/* Back  */}
        <div className='block md:hidden bg-white dark:bg-slate-800'>
          <button
            className=''
            onClick={() => {
              router.back()
            }}
          >
            <div className='flex items-center p-1 transition-all rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 border active:border-slate-200 dark:active:border-slate-600 border-white dark:border-slate-800 gap-2'>
              <Icon className='text-slate-500'>arrow_back</Icon>
              <span className='text-slate-500'>Back</span>
            </div>
          </button>
        </div>

        {/* Sidebar  */}
        <div className='sidebar flex flex-col md:w-96 md:h-full space-y-2'>
          {/* Images */}
          <div
            className='imageBar flex justify-center items-center bg-white dark:bg-slate-800 md:rounded-md p-2 shadow-sm grow h-56'
            onClick={() => setZoom(true)}
          >
            <div className='relative w-full h-full'>
              <IKImage
                alt={title}
                className='object-center h-full w-full object-contain block rounded-md'
                path={imageURL}
              />
            </div>
          </div>

          {/* Buy Buttons */}
          <div className='fixed w-screen md:w-auto md:sticky bottom-0 bg-white dark:bg-slate-800 z-20 md:rounded-lg'>
            <div className='buy flex items-center justify-center gap-2 px-2'>
              <button
                onClick={handleOrderNow}
                className='grow text-sky-50 dark:text-slate-100 bg-sky-500 dark:bg-sky-500 py-2 rounded-md dark:hover:bg-sky-600 hover:bg-sky-600 transition-all'
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon size="1.5rem" className="text-white">whatsapp</Icon>
                  <span>Order Now</span>
                </div>
              </button>
            </div>
          </div>

          {/* Main Screen */}
        </div>
        <div className='productBar bg-white dark:bg-slate-800 md:rounded-md grow px-2 space-y-2 p-2 md:overflow-y-auto pt-5 md:px-10'>
          {/* Back  */}
          <button
            className='hidden md:block'
            onClick={() => {
              router.back()
            }}
          >
            <div className='flex items-center p-1 transition-all rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 border active:border-slate-200 dark:active:border-slate-600 border-white dark:border-slate-800 gap-2'>
              <Icon className='text-slate-500'>arrow_back</Icon>
              <span className='text-slate-500'>Back</span>
            </div>
          </button>
          {/* Product name */}
          <div className='name md:mt-20'>
            <Link href={"/seller/ranofabric"} passHref>
              <a className='block uppercase text-slate-500 text-sm'>
                Aritra Handwoven
              </a>
            </Link>
            <span className='block dark:text-white text-2xl font-semibold md:text-3xl'>
              {title}
            </span>
          </div>
          {/* Price
          <div className='price mt-1 flex flex-wrap gap-4 text-xl md:text-2xl'>
            <p className='text-slate-900 dark:text-slate-100'>₹{price}/mitre</p>
          </div> */}

          {/* Product Details  */}
          <div className='details'>
            <span className='text-slate-500 font-bold'>PRODUCT DETAILS</span>
            <ul className='list-disc ml-5'>
              <li className='text-slate-800 dark:text-slate-100'>
                Count: {details.count}
              </li>
              <li className='text-slate-800 dark:text-slate-100'>
                Length: {details.length} mitres
              </li>
              <li className='text-slate-800 dark:text-slate-100'>
                Width: {details.width} inches
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image Zoom  */}
      {zoom && (
        <Modal state={zoom} setState={setZoom} title={title}>
          <IKImage path={imageURL} />
        </Modal>
      )}
    </>
  )
}

export async function getStaticProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  const product = await Products.findById(context.params.id)

  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  }
}

export async function getStaticPaths() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  const products = await Products.aggregate([
    {$group: {_id: "$_id"}}
  ])
  const paths = products.map((el)=> {
    return {
      params: {id: el._id.toString()}
    }
  })
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default Product
