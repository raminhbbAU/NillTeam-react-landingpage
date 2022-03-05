import styled from "styled-components";

export const CourseSection = styled("section")`
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;
export const PageTitle = styled("h6")`
  margin-bottom:30px;
`;

export const CourseTitle = styled("p")`
  font-size: 18px;
`;


export const Content = styled("p")`
  padding: 3px;
  font-size: 15px;
`;

export const CourseImage = styled("img")`
  padding: 2px;
  width: 250px;
  height:250px;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;