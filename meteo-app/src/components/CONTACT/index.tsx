export default function contact() {
  return (
    <>
      <section id="contact" className="py-24">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 text-4xl text-gray-700 font-bold tracking-wide wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Contact
            </h2>
          </div>

          <div
            className="flex flex-wrap contact-form-area wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="w-full md:w-1/2">
              <div className="contact">
                <h2 className="uppercase font-bold text-xl text-gray-700 mb-5 ml-3">
                  Contact Form
                </h2>
                {/* i didnt create contact js yet  */}
                <form id="contactForm" action="assets/contact.js">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                      <div className="mx-3">
                        <input
                          type="text"
                          className="form-input rounded-full"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                      <div className="mx-3">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          className="form-input rounded-full"
                          name="email"
                          required
                          data-error="Please enter your email"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="subject"
                          name="subject"
                          className="form-input rounded-full"
                          required
                          data-error="Please enter your subject"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3">
                        <textarea
                          className="form-input rounded-lg"
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          rows={5}
                          data-error="Write your message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="submit-button mx-3">
                        <button className="btn" id="form-submit" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="ml-3 md:ml-12 wow fadeIn">
                <h2 className="uppercase font-bold text-xl text-gray-700 mb-5">
                  Get In Touch
                </h2>
                <div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="contact-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <p className="pl-3">Agadir, Morocco</p>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="contact-icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <p className="pl-3">
                      <a href="#" className="block">
                        contact@WEATHERINMOROCCO.com
                      </a>
                      <a href="#" className="block">
                        Yassine.rahhou.1@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="contact-icon">
                      <i className="lni lni-phone-set"></i>
                    </div>
                    <p className="pl-3">
                      <a href="#" className="block">
                        +212 65 654 01 99
                      </a>
                      <a href="#" className="block">
                        +212 60 546 66 46
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
