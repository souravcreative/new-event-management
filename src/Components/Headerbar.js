import React from 'react'
import { Link } from 'react-router-dom'

function Headerbar() {
  return (
    <>
    {/* Header Section start */}
  <header className="main_header_area position-absolute w-100">

    <div className="header-content text-white">
      <div className="container">
        <div className="header-content-inner py-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="social-links ">
                <ul className="m-0 p-0">
                  <li className="d-inline">
                    <Link href="#">
                      <i className="fa fa-facebook border-social rounded-circle text-center"></i>
                    </Link>
                  </li>
                  <Link className="d-inline">
                    <a href="#">
                      <i className="fa fa-twitter border-social rounded-circle text-center"></i>
                    </a>
                  </Link>
                  <li className="d-inline">
                    <a href="#">
                      <i className="fa fa-google border-social rounded-circle text-center"></i>
                    </a>
                  </li>
                  <li className="d-inline">
                    <a href="#">
                      <i className="fa fa-instagram border-social rounded-circle text-center"></i>
                    </a>
                  </li>
                  <li className="d-inline">
                    <a href="#">
                      <i className="fa fa-youtube-play border-social rounded-circle text-center "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header-event-info text-end">
                <ul className="m-0 p-0">
                  <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                    <i className="fa fa-phone pe-1"></i>
                    <small>+33 877 554 332</small>
                  </li>
                  <li className=" px-2 border-end d-inline border-lightgrey border-opacity-50">
                    <i className="fa fa-envelope-o pe-1"></i>
                    <small>info@website.com</small>
                  </li>
                  <li className=" px-2 d-inline ">
                    <i className="fa fa-clock-o pe-1"></i>
                    <small>Mon - Fri: 9:00 - 18:30</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Navigation Bar */}
    <div className="header_menu " id="header_menu">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-2">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div className="navbar-brand m-0">
                <img src="images/logo/1.png" alt="Logo" className="w-100"/>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 ">
              <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                <ul className="navbar-nav align-items-center" id="responsive-menu">
                  <li className="nav-item ">
                    <Link className="nav-link px-2 my-4 py-0 text-white" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-2 my-4 py-0 text-white" to="/about">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-2 my-4 py-0 text-white" href="#" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Speaker
                    </a>
                    <ul className="dropdown-menu bg-lightgrey p-0 rounded">
                      <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          to="/speaker-list">Speakers List</Link></li>
                      <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          to="/speaker-detail">Speakers Details</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-2 my-4 py-0 text-white" href="#" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Schedule
                    </a>
                    <ul className="dropdown-menu bg-lightgrey p-0 rounded">
                      <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          to="/event-list">Event List</Link></li>
                      <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          to="/event-detail">Event Details</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-2 my-4 py-0 text-white" href="#" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Pages
                    </a>
                    <ul className="dropdown-menu bg-lightgrey p-0 rounded">
                      <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          to="/our-sponsor">Sponsors</Link></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="gallery.html">Gallery</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="pricing.html">Pricing</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0" href="faq.html">Faq</a>
                      </li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="testimonial.html">Testimonials</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="product-list.html">Product List</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="product-single.html">Product Single</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0" href="error.html">404
                          Error</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="search-result.html">Search Result</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown ">
                    <a className="nav-link dropdown-toggle px-2 my-4 py-0 text-white" href="#" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      News
                    </a>
                    <ul className="dropdown-menu bg-lightgrey p-0 rounded">
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="news-list.html">News List</a></li>
                      <li><a className="dropdown-item py-3 px-6 text-capitalize black border-0"
                          href="news-single.html">News Single</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2 my-4 py-0 text-white" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="menu-search">
                <a href="#search1" className="mt_search">
                  <i className="fa fa-search fa-lg me-5 text-white"></i>
                </a>
                <a className="btn btn3" href="book-now.html">Buy Ticket<i className="fa fa-long-arrow-right ms-4"></i></a>
              </div>
            </div>
            <div id="slicknav-mobile"></div>
          </div>
        </nav>
      </div>
      <div id="search1">
        <button type="button" className="close">×</button>
        <form>
          <input className="form-control form-control-lg rounded text-white" placeholder="Search..."/>
        </form>
        <button type="button" className="btn"><i className="fa fa-search text-white" aria-hidden="true"></i></button>
      </div>

    </div>
    {/* Navigation Bar Ends  */}
  </header>
  {/* Header section ends  */}
    </>
  )
}

export default Headerbar