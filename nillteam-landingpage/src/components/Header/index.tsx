import React,{ useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import Container from "../../components/common/Container";
import { SvgIcon } from "../../components/common/SvgIcon";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitchContainer,
  LanguageSwitch
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

      
  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const MenuItem = () => {

    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      
      if (element)
      {
        element.scrollIntoView({
          behavior: "smooth",
        });
        setVisibility(false);
      }
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("home")}>
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("team")}>
          <Span>{t("Team")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("courses")}>
          <Span>{t("Courses")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("programs")}>
          <Span>{t("Programs")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("nutrition")}>
          <Span>{t("Nutrition")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">

          <Col>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => languageChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => languageChange("fa")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
              <LogoContainer to="/" aria-label="homepage">
                <SvgIcon src="logo.svg" width="101px" height="64px" />
              </LogoContainer>
          </Col>

          
          <NotHidden>
              <MenuItem />
          </NotHidden>

          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>

        </Row>
        
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>{t("Menu")}</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
