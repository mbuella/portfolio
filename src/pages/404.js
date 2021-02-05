import React from "react"
import { Link } from "gatsby"
import Layout from "./../layouts/default"
import Avatar from "./../../data/images/avatar.svg"

// page specific css here

// page specific js here

const Content = (
    <section class="hero h-screen py-10 text-center flex flex-col justify-center items-center">
      <Avatar />
      <div class="max-w-lg mt-6">
        <h1 class="text-4xl font-serif text-mbuella-gray-300 font-bold">Oops! I can't find that page!</h1>
        <p class="mt-1">Maybe it's just a typo? If not, just go back to <Link class="text-mbuella-fuchsia-400" to="/">homepage</Link>.</p>
      </div>
    </section>
)

class Index extends React.Component {
  render() {
    return (
      <Layout pageTitle="404 Not Found" content={Content}></Layout>
    )
  }
}

export default Index