import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (item, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((line) => line.id === item.id)
      if (existing) {
        return prev.map((line) => (line.id === item.id ? { ...line, qty: line.qty + qty } : line))
      }
      return [...prev, { ...item, qty }]
    })
  }

  const removeItem = (id) => setItems((prev) => prev.filter((line) => line.id !== id))

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id)
    setItems((prev) => prev.map((line) => (line.id === id ? { ...line, qty } : line)))
  }

  const clearCart = () => setItems([])

  const subtotal = useMemo(() => items.reduce((sum, line) => sum + line.price * line.qty, 0), [items])
  const count = useMemo(() => items.reduce((sum, line) => sum + line.qty, 0), [items])

  const value = { items, addItem, removeItem, updateQty, clearCart, subtotal, count }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
