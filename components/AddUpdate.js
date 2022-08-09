import { useContext, useEffect, useState } from "react"
import Modal from "./Modal"
import { IKImage } from "imagekitio-react"
import { toast } from "react-toastify"
import AppContext from "../context/app/appContext"
import Loader from "./Loader"

function AddUpdate() {
  const { setLoading } = useContext(AppContext)
  const [newProduct, setNewProduct] = useState({
      _id: "",
      title: "",
      imageURL: null,
      price: "",
      count: "",
      length: "11",
      width: "46",
  })
  const [uploading, setUploading] = useState(false)


  // Fetch Data
  const fetchData = async (target, body, loader) => {
    loader = loader === false ? false : true
    if (loader) setLoading(true)
    const r = await fetch(target, {
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      method: "POST",
      body: JSON.stringify(body),
    })
    if (loader) setLoading(false)
    return { data: await r.json(), status: r.status }
  }

  const handleAddSave = async () => {
    const r = await fetchData("/api/admin/addproduct", {
      product: toProduct(newProduct),
    })
    if (r.status == 200) toast.success("Product Added")
    setNewProduct({
      _id: "",
      title: "",
      imageURL: null,
      price: "",
      count: "",
      length: "11",
      width: "46",
  })
  }

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }

  const toProduct = (newProduct) => {
    return {
      _id: newProduct._id,
      title: newProduct.title,
      imageURL: newProduct.imageURL,
      price: newProduct.price,
      details: {
        count: newProduct.count,
        length: newProduct.length,
        width: newProduct.width,
      },
    }
  }

  const handleImageUpload = async (e) => {
    setUploading(true)
    const file = e.target.files[0]
    var reader = new FileReader()

    reader.onloadend = async () => {
      const r = await fetchData(
        "/api/admin/uploadproductimage",
        {
          fileName: Math.ceil(Date.now() * Math.random()),
          image: reader.result,
        },
        false
      )
      setNewProduct({ ...newProduct, imageURL: r.data.imageURL })
      setUploading(false)
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <Modal title='Update Product' cancel={false}>
        <div className=''>
          <div>
            <label htmlFor='title'>Product Title</label>
            <input
              value={newProduct.title}
              onChange={handleChange}
              type='text'
              name='title'
              id='title'
              required
              className='form-control px-6 py-2 text-xl font-normal text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 bg-clip-padding border border-white dark:border-slate-800 rounded-full transition focus:border-pink-500 focus:outline-none grow'
            />
          </div>
          <div>
            <label htmlFor='price'>Product Price</label>
            <input
              value={newProduct.price}
              onChange={handleChange}
              type='text'
              name='price'
              id='price'
              required
              className='form-control px-6 py-2 text-xl font-normal text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 bg-clip-padding border border-white dark:border-slate-800 rounded-full transition focus:border-pink-500 focus:outline-none grow'
            />
          </div>

          <div>
            <label htmlFor='count'>Product Count</label>
            <input
              value={newProduct.count}
              onChange={handleChange}
              type='text'
              name='count'
              id='count'
              required
              className='form-control px-6 py-2 text-xl font-normal text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 bg-clip-padding border border-white dark:border-slate-800 rounded-full transition focus:border-pink-500 focus:outline-none grow'
            />
          </div>
          <div>
            <label htmlFor='length'>Product Length</label>
            <input
              value={newProduct.length}
              onChange={handleChange}
              type='text'
              name='length'
              id='length'
              required
              className='form-control px-6 py-2 text-xl font-normal text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 bg-clip-padding border border-white dark:border-slate-800 rounded-full transition focus:border-pink-500 focus:outline-none grow'
            />
          </div>
          <div>
            <label htmlFor='width'>Product Width</label>
            <input
              value={newProduct.width}
              onChange={handleChange}
              type='text'
              name='width'
              id='width'
              required
              className='form-control px-6 py-2 text-xl font-normal text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 bg-clip-padding border border-white dark:border-slate-800 rounded-full transition focus:border-pink-500 focus:outline-none grow'
            />
          </div>
          <div>
            <label
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              htmlFor='image'
            >
              Product Image
            </label>
            <input
              type='file'
              accept='image/*'
              className='block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
              onChange={handleImageUpload}
            />
          </div>
          <div>
            {!uploading ? (
              <IKImage path={newProduct.imageURL} />
            ) : (
              <div className='flex items-center justify-center'>
                <Loader /> <p>Uploading...</p>
              </div>
            )}
          </div>

          <button
            className='px-7 py-3 bg-pink-500 text-white font-medium text-sm uppercase rounded-full hover:bg-pink-600 active:bg-pink-700 active:shadow-lg transition float-right mt-5 mx-5'
            onClick={handleAddSave}
          >
            Add Product
          </button>
        </div>
        <div className='py-10'></div>
      </Modal>
    </>
  )
}

export default AddUpdate
