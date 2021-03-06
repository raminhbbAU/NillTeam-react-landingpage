import styled from "styled-components";

export const TeamSection = styled("section")`
  background: rgb(227, 232, 243);
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 0 20px;

`;
export const PageTitle = styled("h6")`
  margin-bottom:100px;
`;

export const Content = styled("p")`
  padding: 3px;
  font-size: 15px;
`;

export const MemberImage = styled("img")`
  padding: 2px;
  width: 135px;
  height:135px;
  border-radius: 50%;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
