import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LayoutWrapper, LayoutInner, MainContentStyled } from "./LayoutStyled";
import SideNav from "./SideNav";
import SideNavButton from "./SideNavButton";
import { useState } from "react";
import Footer from "./Footer";

export default function Layout() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <LayoutWrapper>
      <Header />
      <LayoutInner className="main-content">
        <SideNav />
        <SideNavButton />
        <MainContentStyled>
          <Outlet />
          <Footer />
        </MainContentStyled>
      </LayoutInner>
    </LayoutWrapper>
  );
}
