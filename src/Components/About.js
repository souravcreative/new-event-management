import React from 'react'
import Headerbar from './Headerbar'
import AboutBannerSec from './AboutBannerSec'
import Overview from './Overview'
import AboutConferenceSection from './AboutConferenceSection'
import Speaker from './Speaker'
import TicketBookSection from './TicketBookSection'
import Direction from './Direction'
import Subscribe from './Subscribe'
import Footerbar from './Footerbar'
import BackToTop from './BackToTop'

function About() {
  return (
    <div>
      <Headerbar/>
      <AboutBannerSec title="About Us"/>
      <Overview/>
      <AboutConferenceSection/>
      <Speaker/>
      <TicketBookSection/>
      <Direction/>
      <Subscribe/>
      <Footerbar/>
      <BackToTop/>
    </div>
  )
}

export default About