import React from 'react'
import styled from 'styled-components'
import profile from "../assets/url_shortener.jpg"
import cover from "../assets/showcase.jpg"

const HeroWrapper = styled.div`
    position: relative;
    height: 300px;
    background: url(${cover}) no-repeat center center/cover;
    .acount {
        position: absolute;
        background-color: white;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        display: flex;
        gap: 1rem;
        padding: 1rem 0.75rem;
        padding-bottom: 0;
        .photo {
            flex: 2;
            padding: 0.5rem;
            position: relative;
            top: -60px;
            img {
                height: 110%;
                border-radius: 7px;
            }

        }
        .info {
            flex: 7;
            display: flex;
            justify-content: space-between;
            .top {
                display: flex;
                flex-direction: column; 
                gap: 1.75rem;
                p {
                    max-width: 450px;
                    margin-bottom: 15px;
                    color: #555;
                }
            }
            .user-details {
                display: flex;
                align-items: center;
                gap: 1rem;
              span  {
                display: flex;
                gap: 1rem;
                    p {
                    font-size: 14px;
                    margin: 0 20px;
                    margin: auto;
                    display: flex;
                    gap: 0.5rem;
                        span{
                            font-weight: 550;
                        }
                    }}
                :last-child {
                    margin-bottom: 25px;
                }

            }
            button {
                display: block;
                background-color: royalblue;
                color: white;
                padding: 0.75rem 2rem;
                align-self: flex-start;
                border: none;
                border-radius: 5px;
                letter-spacing: 2px;
                :active {
                    transform: scale(0.98)
                }
            }
        }

        @media screen and (max-width: 800px) {
            text-align: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            bottom: -130px;
            padding: 0;
            gap: 0;
                .photo {
                  flex: 1;
                  top: -30px;
                    img {
                        width: 150px;
                        height: 150px;
                    }
                }
                .info {
                    flex: 3;
                    flex-direction: column;
                    padding: 0.75rem;
                    .top {
                        text-align: center;
                        gap: 1rem;
                        .user-details {
                            flex-direction: column;
                            margin-bottom: 15px;
                            span {
                                display: flex;
                            }
                        }
                    }
                    button {
                        margin: auto;
                    }
                }
        }
    }
`

const Hero = () => {
  return (
    <HeroWrapper>
        <div className="acount container">
              <div className="photo">
                  <div className="profile-wrapper">
                      <img src={cover} alt="Cover Photo" />
                  </div>
              </div>
              <div className="info">
                  <div className="top">
                      <div className="user-details">
                          <h3>Daniel Jensen</h3>
                          <span>
                              <p><span>2,109</span> Following</p>
                              <p><span>10.8K</span> Followers</p>
                          </span>
                      </div>
                     <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quam rerum. Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                   <button>Follow</button>
              </div>
        </div>
    </HeroWrapper>
  )
}

export default Hero
