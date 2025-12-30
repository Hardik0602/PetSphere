import React from 'react'
import Hero from '../components/Hero'
import ProductListings from '../components/ProductListings'
import Policy from '../components/Policy'
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProductListings isHome={true} />
      <Policy />
    </div>
  )
}
export default HomePage