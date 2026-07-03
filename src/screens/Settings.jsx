import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, LogOut, Trash2 } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import TabBar from '../components/TabBar.jsx'

function SectionCard({ children }) {
  return <div className="flex w-full flex-col items-start rounded-[20px] bg-white px-4">{children}</div>
}

function SectionLabel({ children }) {
  return <p className="font-body text-[11px] font-semibold uppercase text-text-secondary">{children}</p>
}

function RowShell({ children, last, onClick }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`flex w-full items-center gap-3 py-4 text-left ${last ? '' : 'border-b border-border-subtle'}`}
    >
      {children}
    </Tag>
  )
}

function LinkRow({ label, onClick, last }) {
  return (
    <RowShell onClick={onClick ?? (() => {})} last={last}>
      <p className="flex-1 font-body text-[16px] font-semibold text-text-primary">{label}</p>
      <ChevronRight size={16} className="text-text-secondary" />
    </RowShell>
  )
}

function ValueRow({ label, value, onClick, last }) {
  return (
    <RowShell onClick={onClick ?? (() => {})} last={last}>
      <p className="flex-1 font-body text-[16px] font-semibold text-text-primary">{label}</p>
      <div className="flex items-center gap-2">
        <p className="font-body text-[12px] text-text-secondary">{value}</p>
        <ChevronRight size={16} className="text-text-secondary" />
      </div>
    </RowShell>
  )
}

function StaticRow({ label, value, last }) {
  return (
    <RowShell last={last}>
      <p className="flex-1 font-body text-[16px] font-semibold text-text-primary">{label}</p>
      <p className="font-body text-[12px] text-text-secondary">{value}</p>
    </RowShell>
  )
}

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-[24px] w-[44px] shrink-0 rounded-full transition-colors ${checked ? 'bg-interactive-primary' : 'bg-border-subtle'}`}
    >
      <span
        className={`absolute top-[2px] size-[20px] rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-[22px]' : 'translate-x-[2px]'
        }`}
      />
    </button>
  )
}

function ToggleRow({ label, checked, onChange, last }) {
  return (
    <RowShell last={last}>
      <p className="flex-1 font-body text-[16px] font-semibold text-text-primary">{label}</p>
      <Toggle checked={checked} onChange={onChange} label={label} />
    </RowShell>
  )
}

export default function Settings() {
  const navigate = useNavigate()

  const [darkMode, setDarkMode] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(false)
  const [orderUpdates, setOrderUpdates] = useState(true)
  const [promotions, setPromotions] = useState(true)
  const [locationAccess, setLocationAccess] = useState(true)

  return (
    <ScreenShell>
      <Header title="Settings" />

      <div className="flex flex-col gap-8 p-6">
        <div className="flex flex-col gap-3">
          <SectionLabel>Account</SectionLabel>
          <SectionCard>
            <LinkRow label="Edit Profile" onClick={() => navigate('/profile')} />
            <LinkRow label="Change Password" />
            <LinkRow label="Linked Accounts" last />
          </SectionCard>
        </div>

        <div className="flex flex-col gap-3">
          <SectionLabel>Preferences</SectionLabel>
          <SectionCard>
            <ToggleRow label="Dark Mode" checked={darkMode} onChange={setDarkMode} />
            <ValueRow label="Language" value="English" />
            <ValueRow label="Units" value="Metric" last />
          </SectionCard>
        </div>

        <div className="flex flex-col gap-3">
          <SectionLabel>Notifications</SectionLabel>
          <SectionCard>
            <ToggleRow label="Push Notifications" checked={pushNotifications} onChange={setPushNotifications} />
            <ToggleRow label="Email Notifications" checked={emailNotifications} onChange={setEmailNotifications} />
            <ToggleRow label="Order Updates" checked={orderUpdates} onChange={setOrderUpdates} />
            <ToggleRow label="Promotions" checked={promotions} onChange={setPromotions} last />
          </SectionCard>
        </div>

        <div className="flex flex-col gap-3">
          <SectionLabel>Privacy</SectionLabel>
          <SectionCard>
            <ToggleRow label="Location Access" checked={locationAccess} onChange={setLocationAccess} />
            <LinkRow label="Data & Privacy" last />
          </SectionCard>
        </div>

        <div className="flex flex-col gap-3">
          <SectionLabel>About</SectionLabel>
          <SectionCard>
            <StaticRow label="App Version" value="v2.4.0" />
            <LinkRow label="Terms of Service" />
            <LinkRow label="Privacy Policy" />
            <LinkRow label="Rate the App" last />
          </SectionCard>
        </div>

        <div className="flex w-full flex-col items-start gap-2 pt-2">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="flex w-full items-center gap-3 rounded-[20px] bg-white p-4"
          >
            <LogOut size={20} className="text-text-primary" />
            <p className="font-body text-[16px] font-semibold text-text-primary">Log Out</p>
          </button>
          <button type="button" className="flex w-full items-center gap-3 rounded-[20px] bg-white p-4">
            <Trash2 size={20} className="text-status-error" />
            <p className="font-body text-[16px] font-semibold text-status-error">Delete Account</p>
          </button>
        </div>
      </div>

      <TabBar active="profile" />
    </ScreenShell>
  )
}
