import { Routes, Route } from 'react-router-dom'

import Splash from './screens/Splash.jsx'
import Onboarding1 from './screens/Onboarding1.jsx'
import Onboarding2 from './screens/Onboarding2.jsx'
import Onboarding3 from './screens/Onboarding3.jsx'
import Login from './screens/Login.jsx'
import Signup from './screens/Signup.jsx'
import Home from './screens/Home.jsx'
import MenuList from './screens/MenuList.jsx'
import MenuDetail from './screens/MenuDetail.jsx'
import SearchFilters from './screens/SearchFilters.jsx'
import Cart from './screens/Cart.jsx'
import Checkout from './screens/Checkout.jsx'
import Payment from './screens/Payment.jsx'
import OrderConfirmation from './screens/OrderConfirmation.jsx'
import OrderTracking from './screens/OrderTracking.jsx'
import OrderHistory from './screens/OrderHistory.jsx'
import RatingReview from './screens/RatingReview.jsx'
import Profile from './screens/Profile.jsx'
import Addresses from './screens/Addresses.jsx'
import Favorites from './screens/Favorites.jsx'
import Notifications from './screens/Notifications.jsx'
import Settings from './screens/Settings.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding/1" element={<Onboarding1 />} />
      <Route path="/onboarding/2" element={<Onboarding2 />} />
      <Route path="/onboarding/3" element={<Onboarding3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<MenuList />} />
      <Route path="/menu/:id" element={<MenuDetail />} />
      <Route path="/search" element={<SearchFilters />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/order-tracking" element={<OrderTracking />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/rating" element={<RatingReview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
