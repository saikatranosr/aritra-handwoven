import Head from "next/head"
import Link from "next/link"

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Aritra Handwoven</title>
      </Head>
      <article className='dark:text-white max-w-4xl mx-auto bg-white dark:bg-slate-800 py-2 my-2 px-5 md:rounded-md font-light leading-8'>
        <h1 className='text-5xl text-slate-600 dark:text-slate-200 font-semibold py-4'>
          About Us
        </h1>
        <p>
        We are an integrated fabric manufacturer “one stop destination”for all type of handspun handwoven fabric requirement from designing to sampling to mass production. After 20 years of weaving experience gradually ALOKE NANDI, start up his own handloom, handspun ,handwoven fabric manufacturing firm  by the name of “ARITRA HANDWOVEN” in the year 1994

<br/><br/>ARITRA HANDWOVEN is one of a leading fabric manufacturer in india having core expertise in yarn spinning , yarn bobbin, hand weaving, fabric mending and finishing of fabric.we offer almost all type of fabric like muslin cotton fabric,handspun cotton fabric,mulberry silk fabric,matka silk fabrics, kathiya silk fabric,linen fabric, wool fabric,jamdani fabric,all type of yarn dyed fabric like check,stripe ,solid colour etc.

<br/><br/>If you are a garments manufacturing company or fabric supplier company and looking for premium  quality handspun handwoven fabric then you are at the right place.
          <br /> <br />
            <a href="tel:8076385508" target="_blank" rel="noreferrer" className='text-sky-500 hover:underline font-semibold'>
              Call
            </a>
          {" / "} <a href="https://wa.me/918967186558" target="_blank" rel="noreferrer" className='text-sky-500 hover:underline font-semibold'>
              WhatsApp
            </a>
            {" "}
          and start shopping Now
        </p>{" "}
        <br />
        
      </article>
    </>
  )
}
