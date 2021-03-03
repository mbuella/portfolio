import React from "react"
import { Link } from "gatsby"
import Layout from "./../layouts/default"
import { CheckCircle } from "heroicons-react"

// page specific css here

// page specific js here

const ContactSuccess = () => (
  <Layout pageTitle="Message successfully sent!">
    <section class="hero h-screen py-10 text-center flex flex-col justify-center items-center">
      <CheckCircle style={{width: 200, height: 200}} />
      <div class="max-w-lg mt-6">
        <h1 class="text-4xl font-serif text-mbuella-gray-300 font-bold">Thank you!</h1>
        <p class="mt-1">Your message has been successfully sent. I will reach out to you very soon!</p>
        <p class="mt-1">For the meantime, you can go back to <Link class="text-mbuella-fuchsia-600" to="/">homepage</Link>.</p>
      </div>
    </section>
  </Layout>
)

export default ContactSuccess