import React from 'react'
import Headerbar from './Headerbar'
import AboutBannerSec from './AboutBannerSec'
import GoldSponsor from './GoldSponsor'
import PremiumSponsor from './PremiumSponsor'
import Subscribe from './Subscribe'
import Footerbar from './Footerbar'
import BackToTop from './BackToTop'
import SponserSection from './SponserSection'

function OurSponsor() {
  return (
    <>
    <Headerbar/>
    <AboutBannerSec title="Our Sponsers"/>
    <GoldSponsor/>
    <PremiumSponsor/>
    <SponserSection/>
    <Subscribe/>
    <Footerbar/>
    <BackToTop/>
    </>
  )
}

export default OurSponsor