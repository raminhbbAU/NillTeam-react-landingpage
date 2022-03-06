import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../components/common/SvgIcon";
import Container from "../../components/common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Right,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
        style={{color: "red"}}
      >
        <SvgIcon src={src} width="35px" height="35px"/>
      </a>
    );
  };

  return (
    <>
      <FooterSection id={"contact"}>
        <Container>
          <Row justify="space-between">

            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="https://wa.me/989930715261">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>

            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>{t("Address_Line1")}</Para>
              <Para>{t("Address_Line2")}</Para>
              <Para>{t("Address_Line3")}</Para>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Social media")}</Language>
              <SocialLink
                href="https://www.instagram.com/nill__team/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://wa.me/989930715261"
                src="whatsapp.svg"
              />
              <SocialLink
                href="mailto:niloubkh.au@gmail.com"
                src="email.svg"
              />


            </Col>

          </Row>
        </Container>
      </FooterSection>

      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
          >
           
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>

            <Right>©2016-2022 Nill Team Fitness. All Right Reserved.</Right>

          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
