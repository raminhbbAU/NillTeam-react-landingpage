import React,{ lazy } from 'react';


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));

function App() {
  return (
    <Container>
       <ScrollToTop />
    </Container>
  );
}

export default App;
