import { createContext, useContext, useMemo, useState } from 'react'

const CartCtx = createContext(null)
export function useCart() { return useContext(CartCtx) }

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === product.id)
      if (i >= 0) {
        const copy = [...prev]
        copy[i] = { ...copy[i], qty: copy[i].qty + qty }
        return copy
      }
      return [...prev, { ...product, qty }]
    })
  }

  const removeItem = id => setItems(prev => prev.filter(p => p.id !== id))
  const clear = () => setItems([])
  const count = items.reduce((a, b) => a + b.qty, 0)
  const total = items.reduce((a, b) => a + b.qty * b.precio, 0)

  const value = useMemo(() => ({ items, addItem, removeItem, clear, count, total }), [items, count, total])
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}
