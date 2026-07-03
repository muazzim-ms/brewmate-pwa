import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(new Set())

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const isFavorite = (id) => favoriteIds.has(id)

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within a FavoritesProvider')
  return ctx
}
