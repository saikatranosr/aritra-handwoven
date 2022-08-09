import Icon from "./Icon"
import Link from "next/link"

export default function Dropdown({ menuItems }) {
  return (
    <div className='select-none z-50'>
      {menuItems.map((element) => {
        return (
          <div className='scrollbar-hide' key={element[0].text + "parent"}>
            <div className='flex flex-col text-lg'>
              {element.map((e) => {
                if ("link" in e) {
                  return (
                    <Link key={e.text} href={e.link} passHref>
                      <a>
                        <div
                          className={`flex px-5 py-3 items-center font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 space-x-2`}
                        >
                          <Icon className='dark:text-slate-200'>{e.icon}</Icon>
                          <span>{e.text}</span>
                        </div>
                      </a>
                    </Link>
                  )
                } else {
                  return (
                    <div key={e.text} onClick={e.click}>
                      <div
                        className={`flex px-5 py-3 items-center font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 space-x-2`}
                      >
                        <Icon className='dark:text-slate-200'>{e.icon}</Icon>
                        <span>{e.text}</span>
                      </div>
                    </div>
                  )
                }
                // </>
              })}
            </div>
            {menuItems[menuItems.length - 1] != element && (
              <hr className='border border-slate-100 dark:border-slate-700' />
            )}
          </div>
        )
      })}
    </div>
  )
}
