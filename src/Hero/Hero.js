import React from "react";
import styled from "styled-components";

const hero = require("./images/hero-background.png");
const oculus = require("./images/oculus.svg");
const discord = require("./images/discord.svg");

const HeroStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .hero-image{
        width: 100%;
    }

    h2{font-size: 3.375rem;}

    .hero-description{
        margin: 6.25rem 6rem 0 6rem;
        line-height: 3.75rem;
        max-width: 50rem;
    }

    .coming-soon-holder{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 15.625rem;

        .oculus-image{
            margin-top: 2rem;
            width: 21.375rem;
            height: 2.625rem;
        }
    }
    .call-to-action{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 15.625rem 0 18.75rem 0;
        max-width: 30rem;
        text-align: center;

        .discord-image{
            margin-top: 3.75rem;
            height: 3.75rem;
            width: 15.625rem;
        }
    }
`

const Hero = () => (
    <HeroStyled>
        <img className="hero-image" src={hero} />
        <h2 className="hero-description">A small community of artists are custodians of a virtual space called <b>Gallery of Freedom</b>. We are experiementing with new ways to interact with and experience art.</h2>
        <div className="coming-soon-holder">
            <h2 className="coming-soon-text">coming soon too...</h2>
            <img className="oculus-image" src={oculus} />
        </div>
        <div className="call-to-action">
            <h2 className="cta-text">In the meantime, join our community</h2>
            <a href="/"><img className="discord-image" src={discord} /></a>
        </div>
    </HeroStyled>
);

export default Hero;
