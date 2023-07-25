import React, { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../common/components/nav-bar";
import { Container } from "react-bootstrap";
import Footer from "../common/components/footer";

const DefaultLayout = ({ props }) => {
  console.log("props", props);
  return (
    <div>
      <NavigationBar />
      <Container style={{ top: "100px", position: "absolute" }}>
        <Suspense fallback={<p>Loading.....</p>}>
          <Outlet></Outlet>
        </Suspense>
      </Container>
      <Footer/>
    </div>
  );
};

export default memo(DefaultLayout);
