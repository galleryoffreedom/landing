import React from "react";
import styled from "styled-components";
import Canvas from "./Canvas.js";

const oculus = require("./images/oculus.svg");
const discord = require("./images/discord.svg");
const hero = require("./images/hero-background.png");

const HeroStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .canvas-hero{
        display: block;
        background-image: url(${hero});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 0;
        padding-top: 55.14%;
        width: 100%;
        position: relative;
        .canvas-holder{
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            .canvas{
                background: rgba(0,0,0,0) !important;
                height: 100% !important;
                width: 100% !important;
                position: absolute;
                canvas{
                    height: 100% !important;
                }
            }
        }
    }
    

    .hero-image{
        width: 100%;
    }

    .content-block{
        margin: 0 6rem;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 900px) {
            margin: 0 4rem;
        }

        @media (max-width: 700px) {
            margin: 0 3.25rem;
            align-items: flex-start;
            justify-content: flex-start;
        }

        @media (max-width: 500px) {
            margin: 0 2.75rem;
        }

        h2{
            font-size: 3.375rem;
            line-height: 3.75rem;
            
            @media (max-width: 900px) {
                font-size: 2.75rem;
                line-height: 3.25rem;
            }
    
            @media (max-width: 700px) {
                font-size: 2.5rem;
                line-height: 3rem;
            }

            @media (max-width: 500px) {
                font-size: 1.5rem;
                line-height: 2.5rem;
            }
        }
    
        .hero-description{
            margin-top: 6.25rem;
            max-width: 50.75rem;

            a{
                color: #AFAFAF;
                text-decoration: none;
            }

            @media (max-width: 900px) {
                margin-top: 5rem;
            }
    
            @media (max-width: 700px) {
                margin-top: 4rem;
            }

            @media (max-width: 500px) {
                margin-top: 3rem;
            }
        }
    
        .coming-soon-holder{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 15.625rem;

            @media (max-width: 900px) {
                margin-top: 12rem;
            }
    
            @media (max-width: 700px) {
                align-items: flex-start;
                justify-content: flex-start;
                margin-top: 9rem;
            }

            @media (max-width: 500px) {
                margin-top: 6rem;
            }
    
            .oculus-image{
                margin-top: 2rem;
                width: 21.375rem;
                height: 2.625rem;

                @media (max-width: 900px) {
                    margin-top: 1.875rem;
                    width: 18rem;
                    height: 2.25rem;
                }
        
                @media (max-width: 700px) {
                    margin-top: 1.75rem;
                    width: 16rem;
                    height: 2rem;
                }
    
                @media (max-width: 500px) {
                    margin-top: 1.5rem;
                    width: 13.75rem;
                    height: 1.625rem;
                }
            }
        }
        .call-to-action{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 15.625rem 0 18.75rem 0;
            max-width: 34rem;
            text-align: center;

            @media (max-width: 900px) {
                margin: 12rem 0 15rem 0;
            }
    
            @media (max-width: 700px) {
                margin: 10rem 0 12rem 0;
                align-items: flex-start;
                justify-content: flex-start;
                text-align: left;
            }

            @media (max-width: 500px) {
                margin: 7rem 0 9rem 0;
            }
    
            .discord-image{
                margin-top: 3.75rem;
                height: 3.75rem;
                width: 15.625rem;

                @media (max-width: 900px) {
                    margin-top: 3rem;
                    height: 3.125rem;
                    width: 13rem;
                }
        
                @media (max-width: 700px) {
                    margin-top: 2.5rem;
                    height: 2.875rem;
                    width: 12rem;
                }
    
                @media (max-width: 500px) {
                    margin-top: 1.5rem;
                    height: 2.16rem;
                    width: 9rem;
                }
            }
        }
    }

    
`

const Hero = () => (
    <HeroStyled>
        <div className="canvas-hero">
            <Canvas />
        </div>

        <div className="content-block">
            <h2 className="hero-description">A community of artists are creating a virtual space called <a href="https://www.instagram.com/galleryoffreedom/" target="blank"><b>Gallery of Freedom</b></a>. We are experimenting with new ways to interact with and experience VR art.</h2>
            <div className="coming-soon-holder">
                <h2 className="coming-soon-text">coming soon too...</h2>
                <img className="oculus-image" src={oculus} />
            </div>
            <div className="call-to-action">
                <h2 className="cta-text">In the meantime, join our community</h2>
                <a href="https://discord.gg/ad8wSEZ" target="blank"><img className="discord-image" src={discord} /></a>
            </div>
        </div>
    </HeroStyled>
);

export default Hero;
