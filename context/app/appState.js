import AppContext from "./appContext"
import { useState, useEffect } from "react"

const AppState = (props) => {
  // Navbar States ----------------------------------------------------------------
  const [navTitle, setNavTitle] = useState("Aritra Handwoven")
  const [searchMode, setSearchMode] = useState(false)
  const [cartMode, setCartMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({
    _id: "",
    index: 0,
  })

  // Cart States -------------------------------------------------------------------------
  const [cartItems, setCartItems] = useState({})
  const [checkoutItems, setCheckoutItems] = useState({})

  //Login State ---------------------------------------------------------------------------
  const [login, setLogin] = useState({ status: false })

  // Execute at page load ---------------------------------------------------------------

  useEffect(() => {
    const temp_cartItems = localStorage.getItem("cartItems")
    if (temp_cartItems) setCartItems(JSON.parse(temp_cartItems))

    const user = localStorage.getItem("user")
    if (user) {
      setLogin({ status: true, ...JSON.parse(user) })
    }
  }, [])

  useEffect(() => {
    if (Object.keys(cartItems).length != 0)
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  // METHODS
  // -------
  // Cart Methods ------------------------------------------------------------------------------

  const handleQtyChange = (_id, availableQty, value) => {
    const _cartItems = JSON.parse(JSON.stringify(cartItems))
    if (value !== "" && availableQty >= value)
      _cartItems[_id].qty = parseInt(value)
    setCartItems(_cartItems)
  }

  const addRemoveQty = (mode, availableQty, _id) => {
    const _cartItems = JSON.parse(JSON.stringify(cartItems))
    if (mode == "add" && availableQty > cartItems[_id].qty)
      _cartItems[_id].qty = _cartItems[_id].qty + 1
    if (mode == "remove" && cartItems[_id].qty > 1)
      _cartItems[_id].qty = _cartItems[_id].qty - 1
    setCartItems(_cartItems)
  }

  const removeFromCart = (ids) => {
    const _cartItems = JSON.parse(JSON.stringify(cartItems))
    ids.forEach(_id => {
      delete _cartItems[_id]
    });
    setCartItems(_cartItems)
  }

  const addToCart = (_id) => {
    const _cartItems = JSON.parse(JSON.stringify(cartItems))
    _cartItems[_id] = { _id, qty: 1 }
    setCartItems(_cartItems)
  }

  // Checkout Methods ------------------------------------------------------------------------

  const handleCheckoutQtyChange = (_id, availableQty, value) => {
    const _checkoutItems = JSON.parse(JSON.stringify(checkoutItems))
    if (value !== "" && availableQty >= value)
      _checkoutItems[_id].qty = parseInt(value)
    setCartItems(_checkoutItems)
  }

  const addRemoveCheckoutQty = (mode, availableQty, _id) => {
    const _checkoutItems = JSON.parse(JSON.stringify(checkoutItems))
    if (mode == "add" && availableQty > checkoutItems[_id].qty)
      _checkoutItems[_id].qty = _checkoutItems[_id].qty + 1
    if (mode == "remove" && checkoutItems[_id].qty > 1)
      _checkoutItems[_id].qty = _checkoutItems[_id].qty - 1
    setCheckoutItems(_checkoutItems)
  }

  const removeFromCheckout = (_id) => {
    const _checkoutItems = JSON.parse(JSON.stringify(checkoutItems))
    delete _checkoutItems[_id]
    setCheckoutItems(_checkoutItems)
  }

  // Login Methods ---------------------------------------------------------------------------

  const getUser = async (token) => {
    const r = await fetchData("/api/getuser", {}, false)
    return r
  }

  const removeLogin = () => {
    localStorage.removeItem("user")
    setLogin({ status: false })
  }

  // Fetch Data
  const fetchData = async (target, body, loader) => {
    loader = loader === false ? false : true
    if (loader) setLoading(true)
    const r = await fetch(target, {
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "auth-token",
        "auth-token": login.token || "",
      }),
      method: "POST",
      body: JSON.stringify(body),
    })
    if (loader) setLoading(false)
    return { data: await r.json(), status: r.status }
  }

  return (
    <AppContext.Provider
      value={{
        navTitle,
        setNavTitle,
        searchMode,
        setSearchMode,
        cartMode,
        setCartMode,
        cartItems,
        setCartItems,
        handleQtyChange,
        addRemoveQty,
        removeFromCart,
        addToCart,
        login,
        setLogin,
        getUser,
        handleCheckoutQtyChange,
        addRemoveCheckoutQty,
        removeFromCheckout,
        checkoutItems,
        setCheckoutItems,
        removeLogin,
        loading,
        setLoading,
        selectedProduct,
        setSelectedProduct,
        fetchData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
export default AppState
