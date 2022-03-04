import React,{ lazy } from 'react';
import { withTranslation } from "react-i18next";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const Team = lazy(() => import("../../components/Team"));
const Course = lazy(() => import("../../components/Course"));

function Home({ t }: any) {
  return (
    <Container>
       <ScrollToTop />
       <ContentBlock
        type="right"
        title={t("Intro_Title")}
        content={t("Intro_Description")}
        button={t("Intro_Button")}
        icon={t("Intro_logo")}
        id="home"
      />
      
      <Team
       title={t("Team_Title")}
       content={t("Team_Description")} 
       team={t("Team_Members", { returnObjects: true })}
       id="team"
      />
      <Course
       title={t("Course_Title")}
       content={t("Course_Description")} 
       courses={t("Course_list", { returnObjects: true })}
       id="course"
      />
      <MiddleBlock
        title={"title"}
        content={"text"}
        button={"button"}
      />
      <ContentBlock
        type="left"
        title={"title"}
        content={"text"}
        button={"button"}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={"title"}
        content={"text"}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={"title"}
        content={"text"}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={"title"}
        content={"text"}
        id="contact"
      />
    </Container>
  );
}

export default withTranslation()(Home);
