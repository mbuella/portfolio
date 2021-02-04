import React from "react"
import Layout from "./../layouts/default"
import PostList from "./sections/post-list"

// page specific css here

// page specific js here

const Content = (
  <React.Fragment>
    {/* <div class="container my-12 mx-auto px-4 md:px-12">
      <h1 class="text-center text-3xl font-bold">Tailwind's Blog Posts</h1>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <PostList />
    </div> */}
  </React.Fragment>
)

class Index extends React.Component {
  render() {
    return (
      <Layout content={Content}></Layout>
    )
  }
}

export default Index