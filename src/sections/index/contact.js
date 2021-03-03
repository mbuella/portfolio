import React from "react"
import { LocationMarker, Phone, DeviceMobile, Mail } from "heroicons-react"
import ZestIcon from "../../components/zest-icon"

const ContactSection = ({ address, email, mobile, tel, social }) => {
  return (
    <section id="contactme" class="text-center pt-12">
      <h2>Let's Connect!</h2>
      <p class="mt-8 max-w-3xl mx-auto text-left">
        I am currently not available for a full time job, but if you're interested,
        we can get in touch and discuss it over coffee!
      </p>
      <div class="max-w-3xl mx-auto mt-8 lg:space-x-6 space-y-6 lg:space-y-0 flex flex-col lg:flex-row">
        <div class="w-full mx-auto">  
          <form action="/contact-success" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
            <div class="space-y-6">
              {/* Honeypot */}
              <input class="hidden" name="bot-field" />
              <input type="text" name="name" id="name" placeholder="Name" class="text-base" required></input>
              <input type="email" name="email" id="email" placeholder="Email" class="text-base" required></input>
              <textarea name="message" id="message" placeholder="Message" class="text-base" rows="5" style={{minHeight: '50px'}} required></textarea>
            </div>
            {/* Google reCaptcha */}
            <div data-netlify-recaptcha="true"></div>
            <button type="submit" class="button-primary w-48 mt-12">Send</button>
          </form>
        </div>
        <div class="w-full mx-auto px-5 py-8 rounded-lg">  
          <div class="text-left space-y-6">
            <div class="flex space-x-5">
              <div>
                <LocationMarker class="w-8 h-8" />
              </div>
              <p>{address}</p>
            </div>
            <div class="flex space-x-5">
              <div>
                <Phone class="w-8 h-8" />
              </div>
              <a class="text-mbuella-fuchsia-600" href={`tel:${tel}`}>{tel}</a>
            </div>
            <div class="flex space-x-5">
              <div>
                <DeviceMobile class="w-8 h-8" />
              </div>
              <a class="text-mbuella-fuchsia-600" href={`tel:${mobile}`}>{mobile}</a>
            </div>
            <div class="flex space-x-5">
              <div>
                <Mail class="w-8 h-8" />
              </div>
              <a class="text-mbuella-fuchsia-600" href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div class="mt-8 space-x-6">
            {social.map((item) =>
            <a href={item.link} target="_blank" rel="nofollow">
              <ZestIcon uid={item.id} className="w-10 h-10 inline-block fill-current text-mbuella-fuchsia-600" />
            </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection