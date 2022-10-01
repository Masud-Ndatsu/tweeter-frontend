import React from 'react'
import styled from 'styled-components'
import profile from "../assets/showcase.jpg"
import { BsFileImage } from "react-icons/bs"
const Post = styled.div`
    background-color: white;
    color: #333;
    padding: 1rem;
    border-radius: 7px;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
  .post-header {
    height: 70px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      height: 50px;
      width: 50px;
      object-fit: cover;
      border-radius: 5px;
    }
    p {
      margin-bottom: 5px;
    }
    
  }

  .post-body {
      p {
        font-size: 15px;
        letter-spacing: 1px;
        font-weight: 500;
      }
      img {
      height: 300px;
      border-radius: 5px;
      margin-top: 15px;
    }
    .actions {
      display: flex;
      justify-content: space-around;
      padding: 0.5rem 0;
      margin-top: 25px;
      font-size: 14px;
      font-weight: 530;
      p {
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        border-radius: 5px;
        :hover {
        background-color: #ddd;

        }
        :active {
          transform: scale(0.98);
        }
    }
    }
  }

  .post-footer {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
     img {
      width: 40px;
      height: 38px;
      border-radius: 5px;
     }
     .form-group {
      background-color: #ddd;
      width: 100%;
      border-radius: 5px;
      display: flex;
      align-items: center;
          input {
          border: none;
          background-color: transparent;
          width: 95%;
          display: block;
          padding: 10px;
          :focus {
            outline: none;
          }
        }
        .image-upload {
          cursor: pointer;
          :active {
            transform: scale(0.98);
          }
        }
     }
  }
`
const post = () => {
  return (
    <Post>
      <div className="post-header">
        <img src={profile} alt="" />
        <div>
          <h4>Lorem ipsum sit.</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="post-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <img src={profile} alt="" />
        <div className='actions'>
          <p>Comments</p>
          <p>Retweets</p>
          <p>Likes</p>
          <p>Saved</p>
        </div>
      </div>
      <div className="post-footer">
        <img src={profile} alt="" />
        <div className="form-group">
          <input type="text" name="reply" id="" placeholder='Tweet your reply' />
          <BsFileImage className='image-upload' />
        </div>
      </div>
    </Post>
  )
}

export default post
