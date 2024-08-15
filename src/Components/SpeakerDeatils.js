import React from 'react'
import Headerbar from './Headerbar'
import AboutBannerSec from './AboutBannerSec'
import BackToTop from './BackToTop'
import Footerbar from './Footerbar'
import Subscribe from './Subscribe'
import SpeakerDetailSection from './SpeakerDetailSection'
import SpeakerDetailsEventHistory from './SpeakerDetailsEventHistory'

function SpeakerDeatils() {
  return (
    <>
    <Headerbar/>
    <AboutBannerSec title="Speaker Details"/>
    <SpeakerDetailSection/>
    <SpeakerDetailsEventHistory/>
    <Subscribe/>
    <Footerbar/>
    <BackToTop/>
    </>
  )
}

export default SpeakerDeatils