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
    return (<Col span={11} offset={i % 2 ==0 ? 0 : 2}>
      <CourseImage src={course.img}></CourseImage>
      <CourseTitle>{course.name}</CourseTitle>
    </Col>)
  });

  return (
    <CourseSection id={id}>
      <Slide direction="down">
        {/* <ContentWrapper> */}
          <Row  >
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
