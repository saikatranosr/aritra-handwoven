import "../styles/globals.css"
import Navbar from "../components/Navbar"
import AppState from "../context/app/appState"
import Footer from "../components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react"
import { IKContext } from "imagekitio-react"
import Head from "next/head"
import Loader from "../components/Loader"

function MyApp({ Component, pageProps, router }) {
  // const [progress, setProgress] = useState(0)
  const [fade, setFade] = useState(false)

  const imageKitConfig = {
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    authenticationEndpoint: `${process.env.NEXT_PUBLIC_HOST}/api/imagekitauth`,
  }

  const variants = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      // setProgress(20)
      setFade(true)
    })
  }, [router.route])

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      // setProgress(100)
      setFade(false)
    })
  }, [router.route])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <AppState>
        {/* <LoadingBar
          color='rgb(236 72 153)'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={1}
          shadow={false}
        /> */}
        <IKContext
          publicKey={imageKitConfig.publicKey}
          urlEndpoint={imageKitConfig.urlEndpoint}
          authenticationEndpoint={imageKitConfig.authenticationEndpoint}
        >
          <Navbar />
          <div className='md:px-5 min-h-screen flex w-full max-w-full gap-2'>
            <AnimatePresence>
              <motion.main
                key={router.route}
                variants={variants}
                // Pass the variant object into Framer Motion
                initial='hidden'
                // Set the initial state to variants.hidden
                animate='enter'
                // Animated state to variants.enter
                // exit="exit"
                // Exit state (used later) to variants.exit
                transition={{ type: "linear", default: { duration: 0.2 } }}
                // Set the transition to linear
                className='grow'
              >
                <Component {...pageProps} />
              </motion.main>
            </AnimatePresence>
          </div>
          <Footer />
        </IKContext>
        <ToastContainer
          position='bottom-left'
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </AppState>
      {fade && (
        <div className='fixed inset-0 flex w-screen h-screen justify-center items-center z-[60] select-none backdrop-blur-sm backdrop-brightness-75'>
          <Loader />
        </div>
      )}
    </>
  )
}
export default MyApp
