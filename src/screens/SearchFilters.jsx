import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search as SearchIcon, Star } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import TabBar from '../components/TabBar.jsx'
import { menuItems, categories } from '../data/menu.js'

const POPULAR_SEARCHES = ['Iced Latte', 'Flat White', 'Croissant', 'Cold Brew', 'Matcha']
const PRICE_RANGES = ['RM 0–5', 'RM 5–10', 'RM 10+', '4★+']
const SORT_OPTIONS = ['Relevance', 'Price', 'Rating']

export default function SearchFilters() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [activePriceRange, setActivePriceRange] = useState(null)
  const [sortBy, setSortBy] = useState('Relevance')

  const results = menuItems.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.trim().toLowerCase())
    const matchesCategory = !activeCategory || item.category === activeCategory
    return matchesQuery && matchesCategory
  })

  return (
    <ScreenShell>
      <Header />

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto pb-5">
        <div className="flex items-start px-6">
          <div className="flex h-[56px] flex-1 items-center gap-3 rounded-full border border-brand-accent bg-white p-4">
            <SearchIcon size={20} className="text-text-primary" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search coffee, pastries..."
              className="w-full bg-transparent font-body text-[16px] text-text-primary outline-none placeholder:text-text-placeholder"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6">
          <p className="font-heading text-[18px] font-bold text-text-primary">Popular Searches</p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="rounded-full border border-border-subtle bg-white px-4 py-2 font-body text-[14px] text-text-primary"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="px-6 font-heading text-[18px] font-bold text-text-primary">Filter by</p>
          <div className="flex gap-3 overflow-x-auto pl-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory((prev) => (prev === cat.id ? null : cat.id))}
                className={`shrink-0 rounded-full border border-border-subtle px-5 py-[10px] font-body text-[14px] font-semibold ${
                  activeCategory === cat.id ? 'bg-interactive-primary text-white' : 'bg-white text-text-primary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex gap-3 overflow-x-auto pl-6">
            {PRICE_RANGES.map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => setActivePriceRange((prev) => (prev === range ? null : range))}
                className={`shrink-0 rounded-full border border-border-subtle px-5 py-[10px] font-body text-[14px] ${
                  activePriceRange === range ? 'bg-interactive-primary text-white' : 'bg-white text-text-primary'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6">
          <p className="font-heading text-[18px] font-bold text-text-primary">Sort by</p>
          <div className="flex w-full gap-1 rounded-2xl bg-border-subtle p-1">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSortBy(opt)}
                className={`flex h-[40px] flex-1 items-center justify-center rounded-full font-body text-[13px] font-semibold text-text-primary ${
                  sortBy === opt ? 'bg-white' : ''
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6">
          {results.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/menu/${item.id}`)}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/menu/${item.id}`)}
              className="flex w-full items-center gap-4 rounded-2xl bg-white p-2 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]"
            >
              <div className="size-[100px] shrink-0 rounded-xl bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="font-body text-[14px] font-medium text-brand-accent">
                  {categories.find((c) => c.id === item.category)?.name ?? item.category}
                </p>
                <p className="font-heading text-[16px] font-bold text-text-primary">{item.name}</p>
                <div className="flex w-full items-center justify-between">
                  <p className="font-body text-[16px] font-bold text-text-primary">RM {item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-brand-accent text-brand-accent" />
                    <p className="font-body text-[12px] font-bold text-text-primary">{item.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {results.length === 0 && (
            <p className="py-10 text-center font-body text-[14px] text-text-placeholder">No results found.</p>
          )}
        </div>
      </div>

      <TabBar active="search" />
    </ScreenShell>
  )
}
