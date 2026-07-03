import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Phone, Lock, CircleX, Apple } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'

export default function Signup() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ScreenShell>
      <div className="content-stretch flex flex-col gap-8 items-start relative shrink-0 w-full">
        <Header title="BrewMate" />
        <div className="content-stretch flex flex-col gap-12 items-start px-6 relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-2 items-start relative shrink-0 whitespace-nowrap">
            <p className="font-heading font-bold leading-[1.2] relative shrink-0 text-[24px] text-text-primary">
              Join the Craft
            </p>
            <p className="font-body font-normal leading-[1.4] relative shrink-0 text-text-secondary text-[14px]">
              Create an account to start earning beans
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-body font-medium leading-[1.3] relative shrink-0 text-text-secondary text-[12px] whitespace-nowrap">
                Full Name
              </p>
              <div className="bg-white border border-border-strong border-solid content-stretch flex gap-3 h-[56px] items-center px-5 relative rounded-xl shrink-0 w-full">
                <User size={20} className="shrink-0 text-text-placeholder" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Rivers"
                  className="flex-[1_0_0] min-w-px relative font-body font-normal leading-[normal] text-[16px] text-text-primary placeholder:text-text-placeholder bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-body font-medium leading-[1.3] relative shrink-0 text-text-secondary text-[12px] whitespace-nowrap">
                Phone Number
              </p>
              <div className="bg-white border border-border-strong border-solid content-stretch flex gap-3 h-[56px] items-center px-5 relative rounded-xl shrink-0 w-full">
                <Phone size={20} className="shrink-0 text-text-placeholder" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+60 12-345 6789"
                  className="flex-[1_0_0] min-w-px relative font-body font-normal leading-[normal] text-[16px] text-text-primary placeholder:text-text-placeholder bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-body font-medium leading-[1.3] relative shrink-0 text-text-secondary text-[12px] whitespace-nowrap">
                Password
              </p>
              <div className="bg-white border border-border-strong border-solid content-stretch flex gap-3 h-[56px] items-center px-5 relative rounded-xl shrink-0 w-full">
                <Lock size={20} className="shrink-0 text-text-placeholder" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-[1_0_0] min-w-px relative font-body font-normal leading-[normal] text-[16px] text-text-primary placeholder:text-text-placeholder bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
            <button
              type="button"
              onClick={() => navigate('/home')}
              className="bg-interactive-primary content-stretch flex h-[56px] items-center justify-center px-6 relative rounded-2xl shrink-0 w-full"
            >
              <p className="[word-break:break-word] font-body font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
                Create Account
              </p>
            </button>
            <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full">
              <div className="flex-[1_0_0] h-px min-w-px relative bg-border-subtle" />
              <p className="[word-break:break-word] font-body font-medium leading-[1.3] relative shrink-0 text-text-placeholder text-[12px] whitespace-nowrap">
                or continue with
              </p>
              <div className="flex-[1_0_0] h-px min-w-px relative bg-border-subtle" />
            </div>
            <div className="content-stretch flex gap-4 items-start relative shrink-0 w-full">
              <button
                type="button"
                className="bg-white border border-border-subtle border-solid content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-w-px relative rounded-xl"
                aria-label="Continue with Google"
              >
                <CircleX size={24} className="text-text-primary" />
              </button>
              <button
                type="button"
                className="bg-white border border-border-subtle border-solid content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-w-px relative rounded-xl"
                aria-label="Continue with Apple"
              >
                <Apple size={24} className="text-text-primary" />
              </button>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-6 items-center relative shrink-0 w-full px-6 pb-8">
          <p className="[word-break:break-word] font-body font-normal leading-[0] relative shrink-0 text-[14px] text-text-primary whitespace-nowrap">
            <span className="leading-[1.4]">Already have account? </span>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="inline font-body font-bold leading-[1.4] text-text-link"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </ScreenShell>
  )
}
