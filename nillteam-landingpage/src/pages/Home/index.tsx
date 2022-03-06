import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import useGeoLocation from "../../service/location.service";


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const Team = lazy(() => import("../../components/Team"));
const Course = lazy(() => import("../../components/Course"));

function Home({ t }: any) {

  const [ipLocationLoading,setIpLocationLoading]= useState(true);
  const location = useGeoLocation();

  useEffect(() => {  

    if (ipLocationLoading)
    {
      if (!location.isLoading)
      {
        setIpLocationLoading(false);  
        if (location.country === 'IR'){
          languageChange("fa")
        }
        else{
          languageChange("en")
        }
       
      }
    }

  }, [location]);

  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container>
       <ScrollToTop />
       <ContentBlock
        type= "right"
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
       id="courses"
      />
      <ContentBlock
        type="left"
        title={t("Program_Title")}
        content={t("Program_Description")}
        button={t("Program__Button")}
        picture={t("Program_logo")}
        id="programs"
      />
      <ContentBlock
        type="right"
        title={t("Nutrition_Title")}
        content={t("Nutrition_Description")}
        button={t("Nutrition__Button")}
        picture={t("Nutrition_logo")}
        id="nutrition"
      />
    </Container>
  );
}

export default withTranslation()(Home);
