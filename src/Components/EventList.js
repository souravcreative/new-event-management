import React from 'react'
import Headerbar from './Headerbar'
import AboutBannerSec from './AboutBannerSec'
import EventScheduleSection from './EventScheduleSection'
import Subscribe from './Subscribe'
import Footerbar from './Footerbar'
import BackToTop from './BackToTop'

function EventList() {
  return (
    <>
    <Headerbar/>
    <AboutBannerSec title="Event Lists"/>
    <EventScheduleSection/>
    <Subscribe/>
    <Footerbar/>
    <BackToTop/>
    </>
  )
}

export default EventList