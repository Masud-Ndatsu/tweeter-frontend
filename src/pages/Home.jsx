import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Posts from '../components/Posts'

const Main = styled.div`
  margin-top: 150px;
  display: flex;
  gap: 2rem;
  color: white;
  border-radius: 5px;
  padding-bottom: 2rem;
  .side-nav {
    background-color: white;
    color: #333;
    flex: 2;
    padding: 1rem 0;
    border-radius: inherit;
    height: max-content;
    box-shadow: 0 0 3px 1.5px rgba(0, 0, 0, 0.15);
    div {
      padding: 0.75rem 1rem;
      position: relative;
      :hover {
        color: royalblue;
        ::after {
          background-color: royalblue;
          position: absolute;
          content: "";
          width: 2px;
          height: 100%;
          left: 0;
          top: 0;
        }
      }
    }
  }
  .posts {
    padding: 1rem 0;
    min-height: 650px;
    flex: 6;
    border-radius: inherit;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main className='container'>
          <div className="side-nav">
              <div>Tweets</div>
              <div>Tweets & replies</div>
              <div>Media</div>
              <div>Likes</div>
          </div>
          <div className="posts">
            
            <Posts />
          </div>
      </Main>
    </>
  )
}

export default Home
