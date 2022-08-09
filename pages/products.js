import Head from "next/head"
import ProductItem from "../components/ProductItem"
import Products from "../models/Products"
import mongoose from "mongoose"

export default function products({products}) {

  return (
    <>
      <Head>
        <title>Buy Handmade Fabrics - Aritra Handwoven</title>
        <meta name='description' content='Buy Handmade Pure best quality Khadi Fabrics directly from weavers at modarate rate. First Buy then pay.' />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_HOST}/products`}
        />
        <meta property='og:title' content='Products - Aritra Handwoven' />
        <meta
          property='og:description'
          content='Buy Handmade Pure best quality Khadi Fabrics directly from weavers at modarate rate. First Buy then pay.'
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_HOST}/full-logo-sky-500.png`}
        />
        <meta property='og:type' content='website' />
      </Head>
      
        <div className='my-2 flex flex-wrap text-slate-600 mx-auto max-w-5xl justify-center justify-items-start gap-9'>
          {products.map((element) => {
            return <ProductItem key={Date.now() * Math.random()} {...element} />
          })}
        </div>
    </>
  )
}

export async function getStaticProps() {
  if (!mongoose.connections[0].readyState)
    await mongoose.connect(process.env.MONGO_URI)
  const products = await Products.find()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  }
}
