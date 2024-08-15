import React from 'react'
import Headerbar from './Headerbar'
import AboutBannerSec from './AboutBannerSec'
import SpeakerlistSpeakerSection from './SpeakerlistSpeakerSection'
import TicketBookSection from './TicketBookSection'
import Partner from './Partner'
import Subscribe from './Subscribe'
import Footerbar from './Footerbar'
import BackToTop from './BackToTop'

function Speakerlist() {
  return (
    <>
     <Headerbar/>
     <AboutBannerSec title="Our Speakers"/>
     <SpeakerlistSpeakerSection/>
     <TicketBookSection/>
     <Partner/>
     <Subscribe/>
     <Footerbar/>
     <BackToTop/>  
    </>
  )
}

export default Speakerlist