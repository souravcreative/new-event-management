import React from 'react'
import Headerbar from './Headerbar'
import AboutBannerSec from './AboutBannerSec'
import EventDetailsSectionPortion from './EventDetailsSectionPortion'
import Subscribe from './Subscribe'
import Footerbar from './Footerbar'
import BackToTop from './BackToTop'

function EventDetailsSection() {
  return (
    <>
    <Headerbar/>
    <AboutBannerSec title="Event Detail"/>
    <EventDetailsSectionPortion/>
    <Subscribe/>
    <Footerbar/>
    <BackToTop/>
    </>
  )
}

export default EventDetailsSection