import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { TeamSection, Content, MemberImage, PageTitle } from "./styles";

interface TeamProps {
  title: string;
  content: string;
  team: any;
  id: any;
  t: any;
}

const Team = ({ title, content, team, id, t }: TeamProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const teamMembers = team.map((member: any) => (
    <Col lg={8} md={8} sm={12} xs={24}>
      <MemberImage src={member.img}></MemberImage>
      <h6>{member.name}</h6>
      <Content>{member.description}</Content>
    </Col>
  ));

  return (
    <TeamSection id={id}>
      <Slide direction="down">
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <PageTitle>{title}</PageTitle>
          </Col>
        </Row>
        <Row align="top" justify="space-between">
          {teamMembers}
        </Row>
      </Slide>
    </TeamSection>
  );
};

export default withTranslation()(Team);
