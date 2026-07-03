export const currentUser = {
  name: "Alex Mwangi",
  email: "alex.mwangi@email.com",
  avatarUrl: "/avatars/alex_mwangi.png",
};

export const loyalty = {
  tierName: "Gold Member",
  programName: "BrewMate Rewards",
  beans: 340,
  beansToNextReward: 160,
  // Beans needed to complete the current tier's progress bar.
  beansPerReward: 500,
};

export const profileStats = [
  { key: "orders", label: "Orders", value: 24 },
  { key: "favorites", label: "Favorites", value: 12 },
  { key: "reviews", label: "Reviews", value: 8 },
];

export const profileMenuRows = [
  { key: "my-orders", label: "My Orders", icon: "Coffee", path: "/orders" },
  {
    key: "payment-methods",
    label: "Payment Methods",
    icon: "CreditCard",
    path: "/payment-methods",
  },
  { key: "addresses", label: "Addresses", icon: "MapPin", path: "/addresses" },
  {
    key: "notifications",
    label: "Notifications",
    icon: "Bell",
    path: "/notifications",
  },
  {
    key: "help-support",
    label: "Help & Support",
    icon: "HelpCircle",
    path: "/help-support",
  },
];
