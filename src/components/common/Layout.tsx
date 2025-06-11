import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LayoutWrapper, LayoutInner, MainContentStyled } from "./LayoutStyled";
import SideNav from "./SideNav";
import SideNavButton from "./SideNavButton";
import Footer from "./Footer";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <LayoutInner>
        <SideNav />
        <SideNavButton />
        <MainContentStyled>
          <Outlet />
        </MainContentStyled>
        <Footer />
      </LayoutInner>
    </LayoutWrapper>
  );
}
