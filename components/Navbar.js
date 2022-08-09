import { AnimatePresence, motion } from "framer-motion"
import { IKImage } from "imagekitio-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import Icon from "../components/Icon"
import AppContext from "../context/app/appContext"
import Dropdown from "./Dropdown.js"
import Loader from "./Loader"
import ActiveLink from "../components/ActiveLink"

export default function Navbar() {
  const context = useContext(AppContext)
  const { loading } = context

  const variants = {
    hidden: {
      left: -200,
    },
    enter: {
      left: 0,
    },
    exit: {
      left: -200,
    },
  }

  const router = useRouter()

  const [navMenuHeight, setNavMenuHeight] = useState("0")
  const [sideBar, setSideBar] = useState(false)

  const openMoreMenu = () => setNavMenuHeight("90vh")
  const closeMoreMenu = () => setNavMenuHeight("0")

  const openSidebar = () => setSideBar(true)
  const closeSidebar = () => setSideBar(false)

  const sidebarMenuItems = [
    [
      {
        icon: "home",
        text: "Home",
        link: "/",
      },{
        icon: "article",
        text: "Products",
        link: "/products",
      },{
        icon: "info",
        text: "About Us",
        link: "/pages/about",
      },
      {
        icon: "contact_support",
        text: "Contact Us",
        link: "/pages/contact",
      }
    ],
    [
      {
        icon: "call",
        text: "Call Us",
        link: "tel:8076385508",
      },
      {
        icon: "whatsapp",
        text: "WhatsApp",
        link: "http://wa.me/918076385508?text=Hi",
      },,{
        icon: "email",
        text: "Email Us",
        link: "mailto:contact@aritrahandwoven.com",
      }
    ],
  ]

  const moreMenuItems = [
    [
      {
        icon: "call",
        text: "Call Us",
        link: "tel:8076385508",
      },
      {
        icon: "whatsapp",
        text: "WhatsApp",
        link: "http://wa.me/918076385508?text=Hi",
      },{
        icon: "email",
        text: "Email Us",
        link: "mailto:contact@aritrahandwoven.com",
      }
    ],
  ]

  return (
    <>
      <nav className='flex sticky inset-0 z-30 bg-semitp dark:bg-semitpdark backdrop-blur-md dark:bg gap-10 py-2 px-2 shadow-sm dark:shadow-slate-700'>
        <div className='flex items-center mx-1'>
          <div
            className='flex md:hidden items-center p-1 transition-all rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 border active:border-slate-200 dark:active:border-slate-500 border-white dark:border-slate-800'
            onClick={openSidebar}
          >
            <Icon className='dark:text-slate-100' size='1.7rem'>
              menu
            </Icon>
          </div>

          <Link href='/' passHref>
            <a className='flex items-center space-x-2'>
              <div className='w-48'>
                <IKImage
                  className='object-cover'
                  path='ui/full-logo.png'
                  alt='Aritra Handwoven'
                />
              </div>
            </a>
          </Link>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex gap-5 items-center justify-center'>
          <li>
            <ActiveLink href='/'>Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href='/products'>Products</ActiveLink>
          </li>
          <li>
            <ActiveLink href='/pages/about'>About Us</ActiveLink>
          </li>
          <li>
            <ActiveLink href='/pages/contact'>Contact Us</ActiveLink>
          </li>
        </ul>

        {/* More  */}
        <div
          className='relative gap-2 items-center p-1 transition cursor-pointer hidden md:flex'
          onMouseEnter={openMoreMenu}
          onMouseLeave={closeMoreMenu}
          onClick={closeMoreMenu}
        >
          <div className='flex text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 pl-1'>More</div>
          <div className='flex items-center'>
            <Icon className='text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100' size='1.7rem'>
              keyboard_arrow_down
            </Icon>
          </div>
          <div
            style={{ maxHeight: navMenuHeight }}
            className={`menu z-50 transition-all top-8 -left-10 w-max bg-white dark:bg-slate-800 absolute overflow-auto scrollbar-hide rounded-md`}
          >
            <Dropdown menuItems={moreMenuItems} />
          </div>

        </div>
      </nav>
      {
        /* Background Blur Item*/ sideBar && (
          <div className='backdrop-blur-sm backdrop-brightness-50 fixed inset-0 w-full h-full z-40'></div>
        )
      }

      {/* Spinner  */}
      {loading && (
        <div className='fixed inset-0 flex w-screen h-screen justify-center items-center z-[60] select-none backdrop-blur-sm backdrop-brightness-75'>
          <Loader />
        </div>
      )}

      {/* Sidebar Nav */}
      <AnimatePresence>
        {sideBar && (
          <motion.main
            key={"saikat"}
            className='drop-shadow-xl will-change-transform z-50 md:hidden menu transition-all inset-0 bg-white dark:bg-slate-800 fixed w-60 overflow-auto scrollbar-hide'
            variants={variants}
            // Pass the variant object into Framer Motion
            initial='hidden'
            // Set the initial state to variants.hidden
            animate='enter'
            // Animated state to variants.enter
            exit='exit'
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <div className='flex items-center py-2 px-1 space-x-2 bg-sky-500 dark:bg-sky-900 rounded-r-full opacity-75'>
              <div
                className='flex items-center border-sky-500 dark:border-sky-900 p-1 transition-all rounded-full hover:bg-slate-100 dark:hover:bg-sky-800 border active:border-slate-200 dark:active:border-slate-800'
                onClick={closeSidebar}
              >
                <Icon className='text-slate-100' fill='white' size='1.7rem'>
                  close
                </Icon>
              </div>
              <Link href='/' passHref>
                <div className='flex items-center space-x-2'>
                  <div className='h-7 w-44'>
                    <IKImage
                      className='object-cover'
                      path='ui/full-logo.png'
                      alt='Aritra Handwoven'
                    />
                  </div>
                </div>
              </Link>
            </div>
            <Dropdown menuItems={sidebarMenuItems} />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
