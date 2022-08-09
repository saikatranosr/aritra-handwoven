import Link from "next/link"
import PropTypes from "prop-types"
import Dropdown from "./Dropdown"
import { useState } from "react"
import Icon from "./Icon"
import { IKImage } from "imagekitio-react"

export default function ProductItem({
  title,
  _id,
  imageURL,
  details,
  list
}) {

  const [hover, setHover] = useState(false)
  const [menu, setMenu] = useState(false)
  return (
    <div
      className={
        list
          ? `flex h-24 rounded-md max-w-96 gap-4 transition p-2 hover:scale-90 relative`
          : `flex flex-col w-60 p-2 rounded-md hover:scale-110 transition relative`
      }
    >
      <Link href={`/product/${_id}`} passHref>
        <a>
          <div className='relative h-36 overflow-hidden rounded-md'>
            <IKImage
              alt={title}
              className='object-cover rounded-md'
              path={imageURL}
              loading="lazy"
            />
          </div>
        </a>
      </Link>
      <div className='grow'>
        <div className='flex justify-between items-center mt-2'>
          <Link href={`/product/${_id}`} passHref>
            <a className=''>
              <h2 className='text-slate-900 dark:text-slate-100 title-font text-lg md:text-xl font-medium hover:text-sky-500 hover:underline'>
                {title}
              </h2>
            </a>
          </Link>
          
        </div>
        {/* <div className='mt-1 flex flex-wrap gap-5 text-base md:text-lg items-center'>
          <p className=' text-sky-500'>
            ₹{price} /<span className='font-extralight text-sm'>mitre</span>
          </p>
          <p className="text-sm text-slate-500">{availableQty * details.length} mitres in stock</p>
        </div> */}
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  list: PropTypes.bool
}

ProductItem.defaultProps = {
  list: false
}
