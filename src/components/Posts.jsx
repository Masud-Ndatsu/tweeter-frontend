import React from 'react'
import Post from './Post'
import styled from 'styled-components'

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

const Posts = () => {
  return (
    <PostWrapper>
      <Post />
      <Post />
    </PostWrapper>
  )
}

export default Posts
