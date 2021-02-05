import React from "react"
import Layout from "./../layouts/default"
import Avatar from "./../../data/images/avatar.svg"

// page specific css here

// page specific js here

const Content = (
  <section class="hero h-screen py-10 text-center flex flex-col justify-center items-center">
    <Avatar />
    <div class="max-w-md mt-6">
      <h1 class="text-4xl font-serif text-mbuella-gray-300 font-bold">Marlon Buella</h1>
      <p class="mt-1">A passionate web developer, helping companies build highly converting websites.</p>
      <div class="buttons mt-6">
        <a href="#contactme" class="button-default">Contact Me</a>
        <a href="#aboutme" class="button-primary ml-5">Learn More</a>
      </div>
    </div>
  </section>
)

class Index extends React.Component {
  render() {
    return (
      <Layout content={Content}></Layout>
    )
  }
}

export default Index