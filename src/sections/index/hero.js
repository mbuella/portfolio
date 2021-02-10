import React from "react"
import Avatar from "./../../../data/images/avatar.svg"

const HeroSection = ({ firstName, lastName, intro }) => (
  <section id="hero" class="h-screen py-10 text-center flex flex-col justify-center items-center">
    <Avatar />
    <div class="max-w-md mt-6">
      <h1>{firstName} {lastName}</h1>
      <p class="mt-1">{intro}</p>
      <div class="buttons mt-6">
        <a href="#contactme" class="button-default">Contact Me</a>
        <a href="#aboutme" class="button-primary ml-5">Learn More</a>
      </div>
    </div>
  </section>
)

export default HeroSection