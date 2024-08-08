import React from 'react'

function FAQ() {
  return (
    <>
    {/* FAQ Section start */}
  <section className="faq pb-0 overflow-visible d-block position-relative z-1">
    <div className="overlay bg-blue opacity-25 z-n1">
    </div>
    <div className="container">
      <div>
        <div className="row">
          <div className="col-lg-6 px-4 mb-2">
            <div className="faq-general">
              <div className="section-title pb-3 text-center text-lg-start">
                <p className="mb-1 pink">GENERAL QUESTIONS</p>
                <h2 className="mb-2 text-white">FREQUENT ASKED <span className="pink">QUESTIONS!!</span></h2>
                <p className="text-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
              </div>
              <div className="faq-accordion p-4 mb-5 bg-white rounded">
                <div className="accordion accordion-faq" id="accordionFlushExample">
                  <div className="accordion-item ">
                    <p className="accordion-header p-4">
                      <button className="accordion-button collapsed fw-semibold p-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        GLOBAL SEARCH ENGINE OPTIMIZATION
                      </button>
                    </p>
                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body bg-lightgrey p-6">Phasellus quis diam sed ligula sagittis tempus
                        malesuada sed eros. Quisque elementum, diam et pellentesque volutpat, ligula diam suscipit
                        ligula, sit amet hendrerit arcu ipsum eu nulla. Morbi sed molestie nulla, ac viverra turpis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <p className="accordion-header p-4">
                      <button className="accordion-button collapsed  fw-semibold p-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                        aria-controls="flush-collapseTwo">
                        WE OWN AND SHAPE OUR FUTURE
                      </button>
                    </p>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body bg-lightgrey p-6">Placeholder content for this accordion, which is
                        intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's
                        accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <p className="accordion-header p-4">
                      <button className="accordion-button collapsed fw-semibold p-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        HOW LONG DO I GET SUPPORT & UPDATES?
                      </button>
                    </p>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body bg-lightgrey p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum, arcu a accumsan vulputate, leo diam sodales mi, et bibendum mi nunc at lorem. Etiam ut nisi hendrerit,</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  align-self-center px-4">
            <div className="faq-form bg-white rounded shadow-lg p-6 mb-mi">
              <div className="form-title mb-4">
                <p className="mb-1 pink">TICKET BOOK</p>
                <h2 className="mb-2">LET'S RESERVE A <span className="pink">SEAT</span></h2>
                <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.</p>
              </div>
              <div className="form-content justify-content-between">
                <form>
                  <input type="text" placeholder="Full Name" className="mb-5"/>
                  <div className=" row justify-content-around">
                    <div className="col-lg-6 col-md-6">
                      <div className="phone-no">
                        <input type="tel" placeholder="Phone No." className="mb-5"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="emai">
                        <input type="email" placeholder="Email Address" className="mb-5" required/>
                      </div>
                    </div>
                  </div>
                  <textarea placeholder="How may we help you?" rows="4" className="mb-5"></textarea>
                  <button className="btn mb-5" id="sub-btn">SEND MESSAGE</button>
                </form>
                <small>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero hic facere, minima impedit ea
                  quasi nemo odio.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ Section end */}
    </>
  )
}

export default FAQ