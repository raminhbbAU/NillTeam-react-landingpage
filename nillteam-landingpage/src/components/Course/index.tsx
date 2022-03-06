import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { CourseSection, Content, CourseImage,CourseTitle, PageTitle,ContentWrapper } from "./styles";

interface CourseProps {
  title: string;
  content: string;
  courses: any;
  id: any;
  t: any;
}

const Course = ({ title, content, courses, id, t }: CourseProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };


  const courselist = courses.map((course: any,i:any) => {

    if (window.innerWidth<=724)
    {
      return ( 
        <Col sm={24} xs={24} >
           <Slide direction={i % 2 ==0 ? "left" : "right"}>
              <CourseImage src={course.img}></CourseImage>
              <CourseTitle>{course.name}</CourseTitle>
           </Slide>
        </Col>
      )
    }
    else
    {
      return ( 
        <Col span={11} offset={i % 2 ==0 ? 0 : 2}>
           <Slide direction={i % 2 ==0 ? "left" : "right"}>
              <CourseImage src={course.img}></CourseImage>
              <CourseTitle>{course.name}</CourseTitle>
           </Slide>
        </Col>
      )
    }


  });

  console.log(window.innerWidth);

  return (
    <CourseSection id={id}>
      <Slide direction="down">
        {/* <ContentWrapper> */}
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <PageTitle>{title}</PageTitle>
            </Col>
          </Row>
          <Row align="top" justify="end">
            {courselist}
          </Row>
        {/* </ContentWrapper> */}
      </Slide>
    </CourseSection>
  );
};

export default withTranslation()(Course);
