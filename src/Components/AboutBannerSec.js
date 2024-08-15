import React from 'react'

function AboutBannerSec(props) {
  return (
    <>
         {/* Bannner section starts */}
        <section className="banner page-banner position-relative pb-0">
        <div className="overlay">
        </div>
        <div className="container">
            <div className="page-title text-center position-relative py-11">
            <h2 className="text-white text-uppercase">{props.title}</h2>
            </div> 
        </div>
        </section>
        {/* Banner Section end */}
    </>
  )
}

export default AboutBannerSec