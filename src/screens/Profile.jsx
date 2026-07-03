import { useNavigate } from 'react-router-dom'
import { Coffee, CreditCard, MapPin, Bell, HelpCircle, LogOut } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import TabBar from '../components/TabBar.jsx'
import Avatar from '../components/profile/Avatar.jsx'
import LoyaltyCard from '../components/profile/LoyaltyCard.jsx'
import StatCard from '../components/profile/StatCard.jsx'
import MenuRow from '../components/profile/MenuRow.jsx'
import { currentUser, loyalty, profileStats, profileMenuRows } from '../data/profile.js'

const MENU_ICONS = { Coffee, CreditCard, MapPin, Bell, HelpCircle }

export default function Profile() {
  const navigate = useNavigate()

  return (
    <ScreenShell>
      <div className="flex flex-1 flex-col items-start">
        <div className="flex w-full flex-col items-center gap-4 pb-8 pt-6">
          <Avatar name={currentUser.name} imageUrl={currentUser.avatarUrl} />
          <div className="flex flex-col items-center gap-1 whitespace-nowrap [word-break:break-word]">
            <p className="font-heading text-[24px] font-bold leading-[1.2] text-text-primary">{currentUser.name}</p>
            <p className="font-body text-[16px] font-normal leading-[1.5] text-text-secondary">{currentUser.email}</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="flex items-start rounded-[20px] bg-interactive-primary px-5 py-2"
          >
            <p className="font-body text-[14px] font-semibold leading-[1.3] text-white [word-break:break-word]">
              Edit Profile
            </p>
          </button>
        </div>

        <div className="flex w-full items-start px-6 pb-8">
          <LoyaltyCard
            programName={loyalty.programName}
            tierName={loyalty.tierName}
            beans={loyalty.beans}
            beansToNextReward={loyalty.beansToNextReward}
            beansPerReward={loyalty.beansPerReward}
          />
        </div>

        <div className="flex w-full gap-4 px-6 pb-8 whitespace-nowrap [word-break:break-word]">
          {profileStats.map((stat) => (
            <StatCard key={stat.key} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="flex w-full flex-col items-start px-6">
          {profileMenuRows.map((row) => (
            <MenuRow
              key={row.key}
              icon={MENU_ICONS[row.icon]}
              label={row.label}
              onClick={() => navigate(row.path)}
            />
          ))}
          <MenuRow icon={LogOut} label="Sign Out" variant="danger" showChevron={false} onClick={() => navigate('/login')} />
        </div>
      </div>

      <TabBar active="profile" />
    </ScreenShell>
  )
}
