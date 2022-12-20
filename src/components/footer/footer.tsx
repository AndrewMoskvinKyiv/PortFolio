import React from "react";
import styled from "styled-components";
import telegram from "../../images/telegram-plane-brands.svg";
import {StyledSocialNetworkImg} from "../my_works/example/example";
import linkedIn from "../../images/linkedin-in-brands.svg";
import phone from "../../images/phone-call.png";
import email from "../../images/email.png";
import location from "../../images/location.png";

const FooterStyledInner = styled.div`
  padding-top: 30px;
`
const NetworkLinkStyled = styled.a`
  cursor: pointer;
  display: inline-block;
  transition: all 0.5s;
`
const ParagraphStyled = styled.p`
  font-family: "Lato", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 2px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  text-decoration: none;
`
const DivStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const StyledP = styled.p`
  max-width: 500px;
  width: 100%;
  font-size: 16px;
  justify-content: center;
  color: #3e3e3e;
  display: flex;
  align-items: center;
`
const StyledImg = styled.img`
  margin-right: 10px;
  height: 25px;
`


export const Footer = () => {
    return (
        <FooterStyledInner>
            <DivStyled>
                <StyledP>
                    <StyledImg src={phone} alt='phone_icon'/> +905012728210(viber, telegram)
                </StyledP>

                <StyledP>
                    <StyledImg src={email} alt='email_icon'/>andrewmoskvin1@gmail.com
                </StyledP>

                <StyledP>
                    <StyledImg src={location} alt='location_icon'></StyledImg>
                    Turkey/Antalya
                </StyledP>
            </DivStyled>
            <NetworkLinkStyled className={'my_link'}>

                <a href={"https://t.me/MoskvinAndrew"} target='_blank'><StyledSocialNetworkImg src={telegram}
                                                                                               className={'my_picture'}/></a>
                {/*<><StyledSocialNetworkImg src={linkedIn} className={'my_picture'} /></>*/}
                <a href={"https://www.linkedin.com/in/andrew-moskvin-0090011a5/"}
                   target='_blank'><StyledSocialNetworkImg src={linkedIn} className={'my_picture'}/></a>
            </NetworkLinkStyled>
            <ParagraphStyled>Moskvin portfolio. 2021 ©</ParagraphStyled>
        </FooterStyledInner>
    )
}
