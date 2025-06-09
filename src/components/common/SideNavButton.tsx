import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface SideNavButtonProps {}

export default function SideNavButton({}: SideNavButtonProps) {
  return (
    <NavActiveButton>
      <IoIosArrowBack size={12}  />
    </NavActiveButton>
  );
}

const NavActiveButton = styled.a`
  position: absolute;
  top: 0;
  left: 210px;
  display: inline-block;
  width: 26px;
  height: 50px;
  margin-bottom: 0;
  background-color: #edf0f5;
  border-right: 1px solid #dbdde2;
  border-bottom: 1px solid #dbdde2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
