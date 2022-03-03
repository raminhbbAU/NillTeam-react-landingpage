import React,{ lazy } from 'react';


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));

function App() {
  return (
    <Container>
       <ScrollToTop />
       <ContentBlock
        type="right"
        title={"title"}
        content={"text"}
        button={"button"}
        icon="developer.svg"
        id="intro"
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

export default App;
