import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} className={router.asPath === href ? "text-sky-500 font-medium transition" : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition"} onClick={handleClick}>
      {children}
    </a>
  )
}

export default ActiveLink