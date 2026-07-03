import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Camera, Image } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'

const MOODS = ['😍 Loved it', '👍 Good', '😐 Okay']

export default function RatingReview() {
  const navigate = useNavigate()
  const [rating, setRating] = useState(4)
  const [mood, setMood] = useState(MOODS[0])
  const [review, setReview] = useState('')

  return (
    <ScreenShell>
      <Header title="Rate Your Order" />

      <div className="flex flex-1 flex-col gap-8 px-6 pb-10">
        <div className="flex w-full items-center gap-4 rounded-[20px] bg-white p-3 drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]">
          <div className="size-[64px] shrink-0 rounded-lg bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
          <div className="flex flex-1 flex-col gap-[2px]">
            <p className="font-heading text-[16px] font-bold text-text-primary">Salted Caramel Cold Brew</p>
            <p className="font-body text-[14px] font-normal text-text-secondary">Order #BM-20418</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex items-start gap-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                aria-label={`Rate ${value} star${value > 1 ? 's' : ''}`}
              >
                <Star
                  size={36}
                  className={value <= rating ? 'fill-brand-accent text-brand-accent' : 'fill-transparent text-border-subtle'}
                />
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col items-start gap-3">
            <p className="font-body text-[12px] font-bold text-text-primary text-center w-full">How was your coffee?</p>
            <div className="flex w-full flex-wrap items-start justify-center gap-2">
              {MOODS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMood(option)}
                  className={`rounded-[20px] border border-border-subtle px-4 py-[10px] ${
                    mood === option ? 'bg-interactive-primary' : 'bg-white'
                  }`}
                >
                  <p
                    className={`font-body text-[14px] font-semibold whitespace-nowrap ${
                      mood === option ? 'text-white' : 'text-text-primary'
                    }`}
                  >
                    {option}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-3">
          <p className="font-heading text-[18px] font-bold text-text-primary">Write a review</p>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your experience..."
            className="h-[120px] w-full resize-none rounded-[20px] border border-border-subtle bg-white p-4 font-body text-[14px] font-normal text-text-primary placeholder:text-text-placeholder focus:outline-none"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-3">
          <p className="font-heading text-[18px] font-bold text-text-primary">Add Photos</p>
          <div className="flex items-start gap-3">
            <button
              type="button"
              aria-label="Take photo"
              className="flex size-[80px] items-center justify-center rounded-xl border border-border-subtle bg-white"
            >
              <Camera size={24} className="text-text-primary" />
            </button>
            <button
              type="button"
              aria-label="Upload photo"
              className="flex size-[80px] items-center justify-center rounded-xl border border-border-subtle bg-white"
            >
              <Image size={24} className="text-text-primary" />
            </button>
            <div className="size-[80px] shrink-0 rounded-xl bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <button
            type="button"
            onClick={() => navigate('/orders')}
            className="flex h-[56px] w-full items-center justify-center rounded-full bg-interactive-primary px-6"
          >
            <p className="font-body text-[16px] font-semibold text-white">Submit Review</p>
          </button>
          <button
            type="button"
            onClick={() => navigate('/orders')}
            className="w-full text-center"
          >
            <p className="font-body text-[14px] font-semibold text-text-placeholder">Skip</p>
          </button>
        </div>
      </div>
    </ScreenShell>
  )
}
