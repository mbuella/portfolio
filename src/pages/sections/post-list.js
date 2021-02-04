import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PostItem = (props) => (
  <article class="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
      <Img alt="Placeholder" className="block h-auto w-full" fixed={props.post.image.childImageSharp.fixed} />
    </a>

    <header class="flex items-center justify-between h-24 leading-tight p-2 md:p-4">
      <h1 class="text-lg">
        <a class="no-underline hover:underline text-black" href="#">
          {props.post.title}
        </a>
      </h1>
      <p class="text-grey-darker text-sm">{props.post.date}</p>
    </header>

    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
      <a class="flex items-center no-underline hover:underline text-black" href="#">
        <Img alt="Placeholder" className="block rounded-full" fixed={props.post.author.image.childImageSharp.fixed} />
        <p class="ml-2 text-sm">{props.post.author.name}</p>
      </a>
      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
        <span class="hidden">Like</span>
        <i class="fa fa-heart"></i>
      </a>
    </footer>

  </article>
)

const Posts = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
        allPostsYaml {
          nodes {
            title
            date
            image {
              childImageSharp {
                fixed(width: 459, height: 306) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            author {
              name
              image {
                childImageSharp {
                  fixed(width: 32) {
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
      `}
      render={data => {
        return data.allPostsYaml.nodes.map((post, i) => (
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">      
            <PostItem post={post} />
          </div>
        ))
      }}
    />
  )
}

export default function PostList() {
  return (
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <Posts />
    </div>
  )
}